export function selected(selectedFields: Array<string>){

    let idSelected = selectedFields.includes("id");
    let tituloSelected = selectedFields.includes("titulo");
    let tituloOriginalSelected = selectedFields.includes("titulo_original");
    let imagemSelected = selectedFields.includes("imagem");
    let descricaoSelected = selectedFields.includes("descricao");
    let data_lancamentoSelected = selectedFields.includes("data_lancamento");
    let pontuacaoSelected = selectedFields.includes("pontuacao");

    return {
        id: idSelected,
        titulo: tituloSelected,
        titulo_original: tituloOriginalSelected,
        imagem: imagemSelected,
        descricao: descricaoSelected,
        data_lancamento: data_lancamentoSelected,
        pontuacao: pontuacaoSelected,
    }

}