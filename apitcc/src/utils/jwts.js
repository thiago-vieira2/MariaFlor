import jwt from 'jsonwebtoken'
const Key = '===!MariaFlor=='


export function gerarToken(userInfo){
    return jwt.sign(userInfo, Key)
}

export function autenticar(req, resp, next){
    return autenticacao(req, resp, next);
}

export function autenticacao(req, resp, next){
    try{
        let token = req.headers['x-access-token'];

        if(token === undefined)
            token = req.query['x-access-token']

        let signd = jwt.verify(token, Key);

        req.user = signd;

        next();

    } catch (e) {
        resp.status(401).end();
    }
}