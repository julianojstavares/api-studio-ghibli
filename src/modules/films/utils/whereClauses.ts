export function whereClausesOptions(whereClauses: string | undefined, term: string | undefined)
{
    if(whereClauses)
    {
        let clauses = whereClauses.split(",");
        for(let index = 0; index < clauses.length; index++)
        {
            const element = clauses[index];
            return {
                [element]: term ?? ""
            }
        }
    }
}