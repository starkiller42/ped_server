const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'luca3715',
    database: 'crud_pedidos'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// select
app.get('/api/getped', (req, res) => {
    const sqlSelect = "SELECT * FROM pedido";
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result)
    })
})

// insert
app.post('/api/postped', (req, res) => {
    const numero = req.body.numero
    const data = req.body.data
    const descricao = req.body.descricao
    const situacao = req.body.situacao

    const sqlInsert = "INSERT INTO pedido (numero, data_pedido, descricao, situacao) VALUES (?,?,?,?)";
    db.query(sqlInsert, [numero, data, descricao, situacao], (err, result) => {
        res.send(result)
        console.log(err)
    })
})
/*
// delete
app.delete('/api/delete/:movieName', (req, res) => {
    const name = req.params.movieName
    const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";
    db.query(sqlDelete, name, (err, result) => {
        if(err) console.log(err)
    })
})

// update
app.put('/api/update', (req, res) => {
    const name = req.body.movieName
    const review = req.body.movieReview
    const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";
    db.query(sqlUpdate, [review ,name], (err, result) => {
        if(err) console.log(err)
    })
})
*/

app.listen(3001, () => {
    console.log("rodando na porta 3001");
})




/*var app = require('./config/server');

var cadastrar = require('./app/controllers/cadastrarPedidos');
cadastrar(app);

var listar = require('./app/controllers/listarPedidos')(app);

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
})*/