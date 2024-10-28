import con from './connection.js'

export async function inserirProduto(produto) {
    const comando = `
insert into tb_produtos (nm_nomeproduto, bt_categoria, ds_descricao, bt_zeroacucar, bt_diet, vl_preco_kg)
values (?, ?, ?, ?, ?, ?);
`
let info = await con.query(comando[produto.nm_nomeproduto, produto.bt_categoria, produto.ds_descricao, produto.bt_zeroacucar, produto.bt_diet, produto.vl_preco_kg])

let respostas = info[0]
return respostas.inseritId
}

export async function buscarProduto(){
    const comando = `
    
    select id_produto        select id_produto , 
    nm_nomeproduto           nm_nomeproduto  ,
    bt_categoria             bt_categoria ,
    ds_descricao             ds_descricao       , 
    bt_zeroacucar              bt_zeroacucar ,
    bt_diet,                    bt_diet
    vl_preco_kg                  vl_preco_kg 
    from tb_produtos;


    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}

export async function alterarProduto(produto, idProduto) {
   const comando = `
        update tb_produtos
    set nm_nomeproduto = ?,
    bt_categoria = ?,
    ds_descricao = ?,
    bt_zeroacucar = ?,
    bt_diet = ?,
    vl_preco_kg = ?
    where id_produto = ?;
    ` 

    let resposta = await con.query(comando, [produto.categoria, produto.ingredientes, produto.descricao, produto.zeroAcucar, produto.diet, idProduto])
    let info = resposta[0]

    return info.affectedRows

}

export async function deletarProduto(id) {
    const comando = `
        delete from tb_produtos
    where id_produto = ?;

    `
    let resposta = await con.query (comando, [id])
    let info = resposta

    return info.affectedRows
}
