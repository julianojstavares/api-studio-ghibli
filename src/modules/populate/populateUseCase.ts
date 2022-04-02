import { prisma } from "../../database/prismaClient";
import axios from "axios";

interface IFilm {
    title: string;
    original_title: string;
    image: string;
    description: string;
    release_date: string;
    rt_score: string;
}

export class PopulateUseCase {
    async execute() {

        //verificar se a tabela filmes está vazia
        let tableData = await prisma.filmes.count();

        if (tableData > 0) {
            throw new Error("A tabela já possui filmes");
        }

        //buscar filmes da api original
        const { data } = await axios.get("https://ghibliapi.herokuapp.com/films?fields=title,original_title,description,release_date,rt_score,image");

        //cria uma lista de filmes a partir da api
        let films = data.map((film:IFilm) => {
            return {
                titulo: film.title,
                titulo_original: film.original_title,
                imagem: film.image,
                descricao: film.description,
                data_lancamento: film.release_date,
                pontuacao: film.rt_score
            }
        } )

        //insere os filmes na tabela a partir da lista de filmes
        await prisma.filmes.createMany({
            data: films
        });

        // await prisma.filmes.deleteMany();

        // let listaFilmes = await prisma.filmes.findMany();
        tableData = await prisma.filmes.count();

        const populateSuccess = {
            message: "Populate Success",
            filmesCriados: tableData, 
        }

        return populateSuccess;
    }
}