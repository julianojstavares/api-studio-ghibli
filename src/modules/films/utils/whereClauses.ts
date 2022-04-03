import { termOptions } from "./termOptions";

export function whereClausesOptions(whereClauses: string | undefined, term: string | undefined)
{
    if(whereClauses)
    {

        let clauses = whereClauses.split(",");

        let obj = Object.create({});

        for(let index = 0; index < clauses.length; index++)
        {

            const element = clauses[index];

            obj = { ...obj, [element]: termOptions(term), };

        }
        
        console.log("Where Clauses");
        console.log(obj);
        return obj;

    }
}