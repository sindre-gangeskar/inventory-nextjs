import { Prisma } from "@/prisma/generated";
import prisma from "../prisma/prisma";

export class CategoryService {
	static async findAll() {
		try {
			return await prisma.category.findMany({ select: { name: true, id: true } });
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			if (process.env.IS_SERVERLESS) await prisma.$disconnect();
		}
	}

	static async create(name: string) {
		try {
			await prisma.category.create({ data: { name: name } });
			return { status: "success", message: "Successfully created category" };
		} catch (error) {
			console.error(error);

			if (error instanceof Prisma.PrismaClientValidationError) {
				return { status: "fail", message: error.message };
			}

			if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
				return { status: "fail", message: "Cannot create category - a category with the name provided already exists" };
			}
			return { status: "fail", message: "An internal server error has occurred" };
		} finally {
			if (process.env.IS_SERVERLESS) await prisma.$disconnect();
		}
	}
}
