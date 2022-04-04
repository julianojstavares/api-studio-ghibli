import { Prisma } from "@prisma/client";
import { whereClausesOptions } from "./whereClauses";

export function whereOptions(whereOptions: string | undefined, whereClauses: string | undefined, term: string | undefined)
{
    if (whereOptions)
    {
        let options = whereOptions.split(",");

        let obj = Object.create({});
        
        for (let index = 0; index < options.length; index++)
        {
            
            obj = { ...obj, [options[index]]: whereClausesOptions(whereClauses, term), };
            
        }

        return obj;

    }
}