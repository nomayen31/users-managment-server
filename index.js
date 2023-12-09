const express = require('express');
const app = express();
const  cors = require('cors')

// middleware 
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000;
const users = [
    {id:1, name:'shahanika', email:'shahanika@gmail.com'},
    {id:2, name:'ethika', email:'ethika@gmail.com'},
    {id:3, name:'ethikahin', email:'ethikahin@gmail.com'},
]

app.get('/',(req, res)=>{
    res.send('users management  server is running ')
})
     

app.get('/users', (req, res)=>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port , () =>{
    console.log(`server is running on PORT ${port}`);
})