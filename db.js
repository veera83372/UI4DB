
const { Client } = require('pg')
const client = new Client('postgres://localhost:5432/ludo')

client.connect()

const res =  client.query('select * from student');
res.then((res)=>{
  console.log(res.rows);
}).catch((e)=>{
  console.log(e);
})
// client.end()