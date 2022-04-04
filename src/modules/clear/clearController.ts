import { Request, Response } from "express";
import { ClearUseCase } from "./clearUseCase";


export class ClearController
{
    async handle(request: Request, response: Response)
    {
        const clearUseCase = new ClearUseCase();
        const result = await clearUseCase.execute();

        return response.status(200).json(result);
    }
}