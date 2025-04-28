import { PrismaClient } from "@/prisma/generated";
const prisma = new PrismaClient();

export default class ItemService {
	static async findAll() {
		try {
			return await prisma.item.findMany();
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async findOne(id: number) {
		try {
			return await prisma.item.findFirstOrThrow({ where: { id: id }, select: { id: true, name: true } });
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async create(name: string, categoryId: number) {
		try {
			return await prisma.item.create({ data: { name: name, categoryId: categoryId } });
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
