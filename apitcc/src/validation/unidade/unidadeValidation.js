
export  function validarCamposObrigatoriosUnidade(unidade){

    if(!unidade.endereco ){
        throw new Error('Unidade do endereço obrigatório')

    }
    if(!produto.hr_funcionamento){
        throw new Error('Horario de funcionamento obrigatório')

    }
    if(!produto.url_maps){
        throw new Error('Url maps obrigatório')
    }
}
 