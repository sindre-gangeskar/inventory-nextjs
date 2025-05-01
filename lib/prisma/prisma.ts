import { PrismaClient } from "@/prisma/generated";

const globalPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalPrisma.prisma || new PrismaClient({ log: ["query"] });
await prisma
	.$connect()
	.then(() => {
		console.log("Successfully made connection to database 👍");
	})
	.catch(err => console.error(err));
export default prisma;
