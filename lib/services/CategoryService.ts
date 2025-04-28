import { PrismaClient } from "@/prisma/generated";
const prisma = new PrismaClient();

export class CategoryService {
	static async findAll() {}

	static async create(name: string) {
		try {
			return await prisma.category.create({ data: { name: name } });
		} catch (error) {
			console.error(error);
			return error; 
		}
	}
}
