import { termOptions } from "./termOptions";

export function whereClausesOptions(whereClauses: string | undefined, term: string | undefined)
{
    if(whereClauses)
    {

        let clauses = whereClauses.split(",");
        let terms = term?.split(",") ?? [""];

        let obj = Object.create({});

        let elementTerm = "";

        for(let iCLauses = 0; iCLauses < clauses.length; iCLauses++)
        {
            const element = clauses[iCLauses];
            // for(let iTerms = 0; iTerms < terms.length; iTerms++)
            // {
            //     elementTerm = terms[iTerms];
            //     console.log(iTerms)
            // }
            obj = { ...obj, [element]: terms[2], };
            
        }
        
        console.log(obj);
        return obj;
        // console.log(terms)

    }
}