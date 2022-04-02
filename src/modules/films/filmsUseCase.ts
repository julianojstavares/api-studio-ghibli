import { prisma } from "../../database/prismaClient";

export class FilmsUseCase
{
    async execute()
    {
        const filmes = await prisma.filmes.findMany();
        return filmes;
    }
}