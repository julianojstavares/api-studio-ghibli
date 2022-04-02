import { Request, Response } from "express";
import { PopulateUseCase } from "./populateUseCase";


export class PopulateController {

    async handle(request: Request, response: Response) {
       
       const populateUseCase = new PopulateUseCase();
       const result = await populateUseCase.execute();
       
       return response.json(result);

    }

}