const express = require('express')
const cors = require('cors')
const connection = require('./connection')

const app = express()

app.use(cors())

// @url: localhost:3030/add
// @method: POST
// @function: add a new todo
app.post('/add', (req, res) => {
  console.log(req.query.name)
  connection.query(
    `insert into todo(name) values('${req.query.name}')`,
    err => {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message)
        return
      }
      res.status(200).json({ code: 200, message: 'success' })
    }
  )
})

// @url: localhost:3030/
// @method: GET
// @function: get all todos
app.get('/', (req, res) => {
  connection.query(
    `select * from todo where is_deleted = 0`,
    (err, result) => {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message)
        return
      }
      res.status(200).json(result)
    }
  )
})

// @url: localhost:3030/done
// @method: GET
// @function: get all dones
app.get('/done', (req, res) => {
  connection.query(
    `select * from todo where is_deleted = 1`,
    (err, result) => {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message)
        return
      }
      res.status(200).json(result)
    }
  )
})

// @url: localhost:3030/delete/:id
// @method: POST
// @function: change a todo to done(by setting its is_deleted)
app
  .route('/delete/:id')
  .post((req, res) => {
    connection.query(
      `update todo set is_deleted = 1 where id = ${req.params.id}`,
      err => {
        if (err) {
          console.log("[UPDATE ERROR] - ", err.message)
          return
        }
      res.status(200).json({ code: 200, message: 'success'})
      }
    )
  })

app.listen(3030)
