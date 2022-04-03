export function termOptions(term: string | undefined)
{
    if(term)
    {
        let terms = term.split(",");
        return terms;
    }
    else
    {
        return "blank";
    }
}