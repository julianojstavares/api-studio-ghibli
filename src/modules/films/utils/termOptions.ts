export function termOptions(term: string | undefined)
{
    if(term)
    {
        let terms = term.split(",");
        let obj = Object.create({});
        obj
        return terms;
    }
    else
    {
        return "blank";
    }
}