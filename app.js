const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const fileTree = require('./fileTree')

const port = process.env.PORT || 3000;

const app = express()

app.engine('handlebars', hbs())
app.set('view engine', 'handlebars')


//seting static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
res.render('index',{layout:false})
})

app.get('/fileTree',(req,res)=>{
    let data = JSON.stringify(fileTree)
    res.send(data)
})

app.listen(port, () => {
    console.log(`Server listening at  http://localhost:${port}`)
})

