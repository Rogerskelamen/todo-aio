const mysql = require('mysql')

const options = {
  host: 'your hostname',
  user: 'root',
  password: 'your pwd',
  database: 'test'
}

const connection = mysql.createConnection(options)

connection.connect()

module.exports = connection
