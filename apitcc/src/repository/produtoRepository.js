import con from './connection.js'

export async function inserirProduto(produto) {
    const comando = `insert into tb_produtos (categoria, ingredientes, descricao, zeroAcucar, diet)
values (?,?,?,?,?);
`
let info = await con.query(comando[produto.categoria, produto.ingredientes, produto.descricao, produto.zeroAcucar, produto.diet])

let respostas = info[0]
return respostas.inseritId
}

export async function buscarProduto(){
    const comando = `
    select          id_produto, 
    categoria       categoria,
    ingredientes    ingredientes,
    descricao ,         descricao,
    zeroAcucar      zeroAcucar,
    diet            diet
    from produtos;

    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}

export async function alterarProduto(produto, idProduto) {
   const comando = `
    update produtos
    set categoria = ?,
    ingredientes = ?,
    descricao = ?,
    zeroAcucar = ?,
    diet = ?
    where id_produto =  ?;
    ` 

    let resposta = await con.query(comando, [produto.categoria, produto.ingredientes, produto.descricao, produto.zeroAcucar, produto.diet, idProduto])
    let info = resposta[0]

    return info.affectedRows

}

export async function deletarProduto(id) {
    const comando = `
        delete from produtos
    where id_produto = ?;
    `
    let resposta = await con.query (comando, [id])
    let info = resposta

    return info.affectedRows
}
