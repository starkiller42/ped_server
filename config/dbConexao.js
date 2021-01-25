const  mysql = require('mysql');

module.exports = function () {
    return conection = mysql.createConnection({
        host: 'localhost',
        user: 'root@localhost',
        password: 'luca3715',
        database: 'crud_pedidos'
    });
}
    