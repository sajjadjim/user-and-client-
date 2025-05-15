const express = require('express')
const cors = require('cors')
const app = express ()
const port = process.env.PORT || 3000;


app.use(cors())


app.post('/' ,(req, res) => {
        res.send('User server is running')
        console.log(req.body)
    }
)


const user=[
    {id :1 , name :"Sajjad JIM" , email :"jim@gmail.com"},
    {id :2 , name :"Hossain JIM" , email :"hossain@gmail.com"},
    {id :3 , name :"Khan JIM" , email :"khan@gmail.com"},
]

app.get('/users' , (req, res) => {
    res.send(user)
})


app.listen(port, () => {
    console.log(`User server is running on port ${port}`)
})