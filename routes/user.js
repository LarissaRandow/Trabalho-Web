var express = require('express');
var router = express.Router();

var User = require('../models/user')

router.post('/', function(request, response, next)
{
    var user = new User({
        email: request.body.email,
        password: request.body.password, 
        firstName: request.body.firstName,
        lastName: request.body.lastName,      
        gender: request.body.gender
    });
    user.save(function(err, result){
        if(err)
        {

            return response.status(500).json(
                {
                    myErrorTitle: "Erro ao acessar o banco de dados",
                    myError: err
                }
            );
        }
        response.status(201).json(
            {
                myMsgSucess: "Usuario salvo",
                objAuthorSave: result
            }
        )
    });
});

router.get('/', function(req, res, next)
{
    User.find()
            .exec(function(err, result)
            {
                if(err)
                {
                    return res.status(500).json(
                        {
                            myErroTitle: 'Um erro aconteceu na busca',
                            myError: err
                        }
                    );
                }
                res.status(200).json(
                    {
                        myMsgSucess: "Pesquisa Realizada",
                        objSUserSRecuperadoS : result
                    }
                );
            });
    /*User.find({email: req.body.email, password: req.body.password})
            .exec(function(err, result)
            {
                if(err)
                {
                    return res.status(500).json(
                        {
                            myErroTitle: 'Um erro aconteceu na busca',
                            myError: err
                        }
                    );
                }
                else if(result.length !== 0 && req.body.email === result.email && req.body.password === result.password) {
                    res.status(200).json(
                        {
                            myMsgSucess: "Usuario logado",
                            objSMessageSRecuperadoS : result
                        }
                    );
                } 
                else {
                    return res.status(422).json(
                        {
                            myErroTitle: 'Usuario nao cadastrado',
                            myError: err
                        }
                    );
                }
            });*/
            
});


module.exports = router;
