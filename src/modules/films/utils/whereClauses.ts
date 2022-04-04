export function whereClausesOptions(whereClauses: string | undefined, term: string | undefined)
{
    if(whereClauses)
    {
        let clauses = whereClauses.split(",");
        let terms = term?.split(",") ?? [""];
        let obj = Object.create({});

        for(let index = 0; index < clauses.length; index++)
        {
            obj = { ...obj, [clauses[index]]: decodeURIComponent(terms[index] || ""), };
        }
        
        return obj;

    }
}