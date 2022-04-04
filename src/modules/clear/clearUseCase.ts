import { prisma } from "../../database/prismaClient";

export class ClearUseCase
{
  async execute()
  {
    await prisma.filmes.deleteMany();

    const clearSuccess = {
      status: "Successfully Cleaned",
      message: `Não há filmes no banco de dados`,
    }

    return clearSuccess;
  }
}