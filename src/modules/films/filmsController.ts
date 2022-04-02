import { Request, Response } from "express";
import { FilmsUseCase } from "./filmsUseCase";


export class FilmsController
{

    async handle(request: Request, response: Response)
    {

        const filmsUseCase = new FilmsUseCase();
        const result = await filmsUseCase.execute();

        response.json(result);
    }

}