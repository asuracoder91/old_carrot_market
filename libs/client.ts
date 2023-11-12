import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

client.user.create({
	data: {
		email: "einrede@gmail.com",
		name: "Rok",
	},
});
