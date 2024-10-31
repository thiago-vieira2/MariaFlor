import { escape } from 'mysql2';
import con from './connection.js';

export async function inserirEncomendas(encomendas){
    const comando =`
        insert into tb_encomendas(nome, contato, descricao, data_entrega, hora_entrega,forma_pagamento, valor, status)
        values (?, ?, ?, ?, ?, ?, ?,?);
    `

    let resposta = await con.query(comando, [encomendas.nome, encomendas.contato, encomendas.descricao, encomendas.data_entrega, encomendas.hora_entrega, encomendas.forma_pagamento, encomendas.valor, encomendas.status])
    let info = resposta[0]
    let id = info.insertId

    return id
}

export async function consultarEncomendas() {
    const comando = `
    
    select *
    from tb_encomendas;
    `
    let info = await con.query(comando)
    let respostas = info[0]
    return respostas
}


export async function consultarEncomendasFiltro(filtro) {
    const comando = `
    
    select *
    from tb_encomendas
    where status = ?;
    `
    let info = await con.query(comando, [filtro])
    let respostas = info[0]
    return respostas
}



export async function alterarEncomendas(encomendas, idEncomendas) {
    const comando = `
        update tb_encomendas
        set nome = ?, 
            contato = ?, 
            descricao = ?, 
            data_entrega = ?,  
            hora_entrega = ?,
            forma_pagamento = ?, 
            valor = ?
        where id_encomenda = ?;
    `
    let respostas = await con.query(comando, [encomendas.nome, encomendas.contato, encomendas.descricao, encomendas.data_entrega, encomendas.hora_entrega,encomendas.forma_pagamento, encomendas.valor, idEncomendas] ) 
    let info = respostas[0]

    return info.affectedRows
}

export async function alterarStatus(status, idEncomendas) {
    const comando = `
        update tb_encomendas
        set status = ?
        where id_encomenda = ?;
    `
    let respostas = await con.query(comando, [status.status , idEncomendas] ) 
    let info = respostas[0]

    return info.affectedRows
}



export async function deletarEncomendas(id){
    const comando = `
   delete from tb_encomendas
    where id_encomenda = ?;
    `
    let respostas = await con.query (comando, [id])
    let info = respostas[0]
    
    return info.affectedRows
}