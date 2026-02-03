import mysql from 'mysql2';

const options = {
  host: 'your hostname',
  user: 'your username',
  password: 'your pwd',
  database: 'test'
};

const connect = mysql.createConnection(options);

export default connect;

