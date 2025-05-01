import { Prisma } from "@/prisma/generated";
import { isNumeric } from "validator";
import prisma from "../prisma/prisma";

export default class ItemService {
	static async findAll() {
		try {
			return await prisma.item.findMany({ select: { id: true, name: true, Category: true, categoryId: true } });
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			if (process.env.IS_SERVERLESS) await prisma.$disconnect();
		}
	}

	static async findOne(id: number) {
		try {
			return await prisma.item.findFirstOrThrow({ where: { id: id }, select: { id: true, name: true } });
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			if (process.env.IS_SERVERLESS) await prisma.$disconnect();
		}
	}

	static async create(name: string, categoryId: number) {
		try {
			if (!isNumeric(categoryId.toString())) {
				const error = new Error("Category ID must be a number");
				error.name = "InvalidCategoryIDValue";
				throw error;
			}

			await prisma.item.create({ data: { name: name, categoryId: categoryId } });
			return { status: "success", message: "Successfully added item to inventory" };
		} catch (error) {
			console.error(error);

			if (error instanceof Error && error.name === "InvalidCategoryIDValue") {
				return { status: "fail", message: error.message };
			}
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") return { status: "fail", message: "Cannot create item - an item by the same name already exists" };

				return { status: "fail", message: "Cannot find category by provided ID" };
			}

			return { status: "fail", message: "An internal server error has occurred" };
		} finally {
			if (process.env.IS_SERVERLESS) await prisma.$disconnect();
		}
	}

	static async delete(id: number) {
		try {
			await prisma.item.delete({ where: { id: id } });
			return { status: "success", message: "Successfully deleted item" };
		} catch (error) {
			console.error(error);
			return { status: "fail", message: "An internal server error has occurred" };
		}
	}
}
