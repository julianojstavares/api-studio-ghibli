import { prisma } from "../../database/prismaClient";
import axios from "axios";

interface IFilm
{
    title: string;
    original_title: string;
    image: string;
    description: string;
    release_date: string;
    rt_score: string;
}

export class PopulateUseCase
{
    async execute()
    {
        //buscar filmes da api original
        const { data } = await axios.get("https://ghibliapi.herokuapp.com/films?fields=title,original_title,description,release_date,rt_score,image");

        //cria uma lista de filmes a partir da api
        let films = data.map((film: IFilm) =>
        {
            return {
                titulo: film.title,
                titulo_original: film.original_title,
                imagem: film.image,
                descricao: film.description,
                data_lancamento: film.release_date,
                pontuacao: film.rt_score
            }
        })

        //insere os filmes na tabela a partir da lista de filmes
        await prisma.filmes.createMany({
            data: films
        });

        let tableData = await prisma.filmes.count();

        const populateSuccess = {
            status: "Successfully Populated",
            message: `${tableData} filmes inseridos no banco de dados`,
        }

        return populateSuccess;
    }
}