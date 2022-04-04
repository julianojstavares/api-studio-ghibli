import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prismaClient";

export async function ensureTableEmpty(request: Request, response: Response, next: NextFunction)
{

    try
    {
        let tableData = await prisma.filmes.count();
        
        if (tableData > 0)
        {
            throw new Error();
        }

        return next();

    } catch (error)
    {
        return response.status(400).json({ error: 'Os filmes já estão no banco de dados' });
    }

}