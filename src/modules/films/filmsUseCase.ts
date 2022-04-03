import { Prisma } from "@prisma/client";
import { prisma } from "../../database/prismaClient";
import { ordered } from "./utils/ordered";
import { selected } from "./utils/selected";
import { whereOptions } from "./utils/whereOptions";

interface IFilmsQuery
{

    limit?: string;
    offset?: string;
    order?: Prisma.SortOrder;
    orderedField?: string;
    fields?: string;
    where?: string;
    whereClauses?: string;
    term?: string;

}

export class FilmsUseCase
{

    async execute({ limit, offset, order, orderedField, fields, where, whereClauses, term }: IFilmsQuery)
    {

        let filmes = {} as Array<{}>;
        const totalFilms = await prisma.filmes.count();
        let qLimit = limit ? parseInt(limit) : totalFilms;
        let qOffset = offset ? parseInt(offset) : 0;
        let selectedFields = fields ? fields.split(",") : [];

        if (selectedFields.length > 0)
        {
            filmes = await prisma.filmes.findMany({

                skip: qOffset,
                take: qLimit,
                orderBy: ordered(orderedField, order),
                select: selected(selectedFields),
                where: whereOptions(where, whereClauses, term),

            });
        }
        else
        {

            filmes = await prisma.filmes.findMany({

                skip: qOffset,
                take: qLimit,
                orderBy: ordered(orderedField, order),
                where: whereOptions(where, whereClauses, term),

            });

        }

        let pageInfo = {
            filmes_cadastrados: totalFilms,
            filmes_listados: filmes.length,
            limit: limit,
            offset: offset,
            filmes
        }

        return pageInfo;

    }

}