const Express = require('express')


const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({extended: false}))
require('./controllers/authControllers')(app)

app.get('/', (req, res)=>{
    res.send('itsAllRightBro')
})

app.listen(9000)