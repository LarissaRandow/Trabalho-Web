var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res, next)
{
    Message.find()
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
                        myMsgSucess: "Mensagem recuperada",
                        objSMessageSRecuperadoS : result
                    }
                );
            });
});

router.post('/', function(req, res, next)
{
    var message = new Message({
        content: req.body.content,
        username: req.body.username,
        userID: req.body.userID
    });
    message.save(function(err, result)
    {
        if(err)
        {
            return res.status(500).json(
                {
                    myErroTitle: "Um erro aconteceu no add",
                    myError: err
                }
            );
        }
        res.status(201).json(
            {
                myMsgSucess: "Mensagem salva",
                objMessageSave : result
            }
        )
    });
    console.log("add");
});

router.delete('/', function(req, res, next)
{
    Message.deleteOne({messageID: req.body.messageID})
            .exec(function(err, result)
            {
                if(err)
                {
                    return res.status(500).json(
                        {
                            myErroTitle: 'Um erro aconteceu no delete',
                            myError: err
                        }
                    );
                }
                res.status(200).json(
                    {
                        myMsgSucess: "Mensagem deletada",
                        objSMessageSRecuperadoS : result
                    }
                );
            });

})

router.put('/', function(req, res, next)
{
    Message.updateOne({messageID: req.body.messageID}, {$set: {content: req.body.content}})
            .exec(function(err, result)
            {
                if(err)
                {
                    return res.status(500).json(
                        {
                            myErroTitle: 'Um erro aconteceu na edição',
                            myError: err
                        }
                    );
                }
                res.status(200).json(
                    {
                        myMsgSucess: "Mensagem editada",
                        objSMessageSRecuperadoS : result
                    }
                );
            });
})
  
module.exports = router;