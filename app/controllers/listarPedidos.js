var dbConnection = require('../../config/dbConexao');

module.exports = function(app){

    app.get('/lista/pedidos', (req, res) => {
        
        var conection = dbConnection();

        conection.query('select * from pedidos', (erro, result) => {
            res.send(result);
        });
    });
}