import { Prisma } from "@prisma/client";
import { prisma } from "../../database/prismaClient";

interface IFilmsQuery
{

    limit?: string;
    offset?: string;
    order?: Prisma.SortOrder;
    orderedField?: string;
    fields?: string;

}

export class FilmsUseCase
{

    async execute({ limit, offset, order, orderedField, fields }: IFilmsQuery)
    {

        const totalFilms = await prisma.filmes.count();

        let qLimit = limit ? parseInt(limit) : totalFilms;
        let qOffset = offset ? parseInt(offset) : 0;

        let selectedFields = fields ? fields.split(",") : [];

        let idSelected = selectedFields.includes("id");
        let tituloSelected = selectedFields.includes("titulo");
        let tituloOriginalSelected = selectedFields.includes("titulo_original");
        let imagemSelected = selectedFields.includes("imagem");
        let descricaoSelected = selectedFields.includes("descricao");
        let data_lancamentoSelected = selectedFields.includes("data_lancamento");
        let pontuacaoSelected = selectedFields.includes("pontuacao");

        let filmes = {} as Array<{}>;


        if (selectedFields.length > 0)
        {
            filmes = await prisma.filmes.findMany({

                skip: qOffset,
                take: qLimit,
                orderBy: {
                    [orderedField ?? "data_lancamento"]: order || "asc"
                },
                select: {
                    id: idSelected,
                    titulo: tituloSelected,
                    titulo_original: tituloOriginalSelected,
                    imagem: imagemSelected,
                    descricao: descricaoSelected,
                    data_lancamento: data_lancamentoSelected,
                    pontuacao: pontuacaoSelected,
                },

            });
        }
        else
        {

            filmes = await prisma.filmes.findMany({

                skip: qOffset,
                take: qLimit,
                orderBy: {
                    [orderedField ?? "data_lancamento"]: order || "asc"
                }

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