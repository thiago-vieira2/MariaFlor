import con from './connection.js';

export async function inserirCliente(cliente){
    const comando = `
    insert into tb_cliente (nome, email, telefone, cpf)
    values (?,?,?,?);
    `
    let info = await con.query(comando, [cliente.nome, cliente.email, cliente.telefone, cliente.cpf])

    let respostas = info[0]

    return respostas.inserirId
}

export async function buscarCliente(){
    const comando = `
    select      id_cliente,
    nome        nome,
    email       email,
    telefone    telefone,
    cpf 
    from tb_cliente;

    `

    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}

export async function alterarCliente(){
    const comando = `
    update tb_cliente
    set nome = ?,
    email = ?, 
    telefone = ?,
    cpf = ?,
    where id_cliente = ?;
    `
    let resposta = await con.query(comando, [estoque.nome, estoque.tipoAlimento, idEstoque])
    let info = resposta[0]

    return info.affectedRows
}

export async function deletarCliente(id) {
    const comando = `
    delete from tb_cliente
    where id_cliente = ?;
    `
    let resposta = await con.query (comando, [id])
     let info = resposta[0]

     return info.affectedRows
    
}

