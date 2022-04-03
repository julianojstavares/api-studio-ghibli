import { whereClausesOptions } from "./whereClauses";

export function whereOptions(whereOptions: string | undefined, whereClauses: string | undefined, term: string | undefined)
{
    if (whereOptions && whereClauses)
    {
        let options = whereOptions.split(",");

        for (let index = 0; index < options.length; index++) {
            const element = options[index];
            return {
                [element]: whereClausesOptions(whereClauses, term)
            }
        }
    }
}