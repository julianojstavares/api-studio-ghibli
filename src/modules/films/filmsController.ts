import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { FilmsUseCase } from "./filmsUseCase";


export class FilmsController
{

    async handle(request: Request, response: Response)
    {
        let limit;
        let offset;
        let order;
        let orderedField;
        let fields;
        let where;
        let clause;
        let term;

        if (request.query)
        {
            limit = request.query.limit as string;
            offset = request.query.offset as string;
            order = request.query.order as Prisma.SortOrder;
            orderedField = request.query.orderedField as string;
            fields = request.query.fields as string;
            where = request.query.where as string;
            clause = request.query.clause as string;
            term = request.query.term as string;
        }

        const filmsUseCase = new FilmsUseCase();

        // try
        // {

        //     const result = await filmsUseCase.execute({ limit, offset, order, orderedField, fields });
        //     response.json(result);

        // } catch (error)
        // {

        //     response.status(400).json({
        //         "erro": "Erro ao listar filmes. Verifique os parâmetros passados na query."
        //     });

        // }

        const result = await filmsUseCase.execute({ limit, offset, order, orderedField, fields, where, clause, term });
        response.json(result);

    }

}