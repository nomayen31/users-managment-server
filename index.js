const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const users = [
    {id:1, name:'shahanika', email:'shahanika@gmail.com'},
    {id:3, name:'ethika', email:'ethika@gmail.com'},
    {id:2, name:'ethikahin', email:'ethikahin@gmail.com'},
]

app.get('/',(req, res)=>{
    res.send('users management  server is running ')
})

app.get('/users', (req, res)=>{
    res.send(users)
})

app.listen(port , () =>{
    console.log(`server is running on PORT ${port}`);
})