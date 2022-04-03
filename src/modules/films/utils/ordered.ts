export function ordered(orderedField: string | undefined, order: string | undefined)
{
    return {
        [orderedField ?? "data_lancamento"]: order || "asc"
    }
}