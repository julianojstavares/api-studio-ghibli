import { Prisma } from "@prisma/client";
import { whereClausesOptions } from "./whereClauses";

export function whereOptions(whereOptions: string | undefined, whereClauses: string | undefined, term: string | undefined)
{
    if (whereOptions)
    {
        let options = whereOptions.split(",");

        let obj = Object.create({});

        const element = options[0];

        obj = { [element]: whereClausesOptions(whereClauses, term), };

        for (let index = 0; index < options.length; index++)
        {

            const element = options[index];

            obj = { ...obj, [element]: whereClausesOptions(whereClauses, term), };

        }

        console.log("Where Options");
        console.log(obj);

        return obj;
    }
}