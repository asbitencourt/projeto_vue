/**
 * Arquivo: server.js
 * Descrição: Arquivo responsável por levantar o serviço do Node.Js para poder
 * executar a aplicação e a API através do Express.Js.
 * Author: André da Silva Bitencourt
 * Data de Criação: 19/01/2022
 */
 
//Application Setup Base:
 
/* Call the Packages that we will need for our application */
var express     = require('express'); // calling the express package
var app         = express(); //define our application through express
var bodyParser  = require('body-parser');  // calling the body-parser package
var mongoose = require('mongoose'); // calling the mongoose package
var cors = require('cors'); // calling the CORS package
var User = require('./app/models/user');
const { route } = require('express/lib/application');

mongoose.connect('mongodb://localhost/node-api-users');

 
/** Setting the 'app' variable to use 'bodyParser()'.
 * By doing this it will allow us to return the data from a POST
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
/** Definição da porta onde será executada a nossa aplicação */
var port = process.env.PORT || 8000; 
 
//Routes from our API:
//==============================================================
 
/* Here the 'router' will get the Express Routes instances */
var router  = express.Router(); 
 
/* Middleware to use in all requests sent to our API - Standard Message */
router.use(function(req, res, next) {
    console.log('Algo está acontecendo aqui........');
    next(); //here is to signal that we will proceed to the next route. And it won't stop here!!!
});
 
/* Test route to see if everything is really working (access via: http://localhost:8000/api) */
router.get('/', function(req, res) {
    res.json({ message: 'Olá! Seja Bem-Vindo a nossa API' });
});

router.route('/user')
 /*  Insert method (access in: POST http://localhost:8080/api/user/) */
.post(function(req,res){

             var user = new User();
             user.UUID = req.body.UUID;
             user.nome = req.body.nome;
             user.email = req.body.email;
    
             user.save(function(error){
                if(error)
                    res.send('Erro ao tentar salvar o produto...:'+ error);
    
        res.json('Usuário Cadastrado com Sucesso!');

  });
})
     // method that returns all registered users
    .get( function(req,res){
        User.find(function(error,users){
            if(error)
               res.send('Erro ao tentar selecionar Todos Usuários...:'+ error);
            res.send(users);
        });

    })

    router.route('/user/EMAIL/:email')


    .get(function (req, res) {
        
       // Function to check if the informed email is already registered, if it has, it returns the registered user,
        // otherwise it returns empty:
        User.find({email: req.params.email}, function(error, user) {
            if(error)
                res.send('E-mail não encontrado....: ' + error);

            res.json(user);
        });
    })

    router.route('/user/UUID/:UUID')


    .get(function (req, res) {
        
        // Function to check if the informed email is already registered, if it has, it returns the registered user,
        // otherwise it returns empty:
        User.find({UUID: req.params.UUID}, function(error, user) {
            if(error)
                res.send('Id do User não encontrado....: ' + error);

            res.json(user);
        });
    })

    router.route('/user/:user_id')


    .get(function (req, res) {
        
        //Function to be able to select a certain user by ID - it will check if it doesn't find a certain one
        //user by id... returns an error message:
        User.findById(req.params.user_id, function(error, user) {
            if(error)
                res.send('Id do User não encontrado....: ' + error);

            res.json(user);
        });
    })
    
   
 /*  Update method (access in: PUT http://localhost:8080/api/user/:id) */
 .put(function(req, res) {

    //First: To update, we first need to find the User. For this, let's select by id:
    User.findById(req.params.user_id, function(error, user) {
        if(error) 
            res.send(error);
        
        //Second: Different from Select By Id... the answer will be the assignment of what we find in the model class:
        user.UUID = req.body.UUID;
        user.nome = req.body.nome;
        user.email = req.body.email;

       //Third: Now that we've updated the fields, we need to save this change....
        user.save(function(error) {
            if(error)
                res.send(error);

            res.json({ message: 'User Atualizado!' });
        });
    });
})

/*  Method: Delete (access in: http://localhost:8080/api/user/:id) */
.delete(function(req, res) {

   //Function to delete the data and also check if there are any errors at the time of deletion:
    User.remove({
    _id: req.params.user_id
    }, function(error) {
        if(error)
            res.send(error);

        res.json({ message: 'Usuário excluído com Sucesso! '});
    });
});
    


app.use(cors());
/* All our routes will be prefixed with '/api' */
app.use('/api', router);
 
//Starting the Server (Application):
//==============================================================
app.listen(port);
console.log('Iniciando a aplicação na porta ' + port);