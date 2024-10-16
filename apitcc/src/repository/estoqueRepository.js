import con from './connection.js';

export async function inserirEstoque(estoque) {
    const comando = `insert into tb_estoque(nome, tipo_alimento)
    values(?, ?);
`
let info = await con.query(comando, [estoque.nome, estoque.tipoAlimento])

let respostas = info[0]

return respostas.inserirId
    
}

export async function buscarEstoque(){
    const comando = `
    select  nome    nome,
        tipo_alimento   tipoAlimento
    from tb_estoque;
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}

export async function alterarEstoque(estoque, idEstoque) {
    const comando = `
    update tb_estoque 
    set nome = ?,
    tipo_alimento = ?
    where id_estoque =?;
    `
    let resposta = await con.query(comando, [estoque.nome, estoque.tipoAlimento, idEstoque])
    let info = resposta[0]

    return info.affectedRows
    
}

export async function deletarEstoque(id) {
    const comando = `
    delete from tb_estoque
    where id_estoque = ?;
    `
     let resposta = await con.query (comando, [id])
     let info = resposta[0]

     return info.affectedRows
    
}