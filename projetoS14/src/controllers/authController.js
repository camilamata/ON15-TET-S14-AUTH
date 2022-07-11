const ClientsSchema = require("../models/clientsSchema");

const login = (req, res) => {
    try {
        ClientsSchema.findOne({ email: req.body.email}, (error, client) =>{
            if(!client) {
                return res.status(401).send({
                    message: "Usuário não encontrado.",
                    email: `${req.body.email}`
                })
            }
            //utilizando também uma função do bcrypt, vou comparar a senha do usuário encontrado (pelo email) com a senha que veio da requisição
            const validPassword = bcrypt.compareSync(req.body.password, client.password);
            console.log("A SENHA É VÁLIDA?", validPassword)

            if(!validPassword) {
                return res.status(401).send({
                    "message": "Login não autorizado",
                    "statusCode": 401
                })
            }
        })
    } catch (error) {
        
    }



}




module.exports = {
    login
}