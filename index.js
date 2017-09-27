const PORT = 1119
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(cors()) //check security!!

app.all('/', (req,res) => {
    console.log('home redirect to /api/posts')
    res.redirect('/api/posts')
})

const rPosts = require('./routes/posts')
app.use('/api/posts',rPosts)

const rSession = require('./routes/session')
app.use('/api/session', rSession)

const basicAuth = require('./middleware/basicAuth')
app.get('/protected', basicAuth.BasicAuthCredentials,
(req, res) => {
  console.log(req.credentials);
  res.send('PROTECTED DATA')
})

app.listen(PORT, () => {
console.log(`💥  ${new Date().toLocaleString()}`)
console.log(`🚀  Port 1119...GO! 🚀`)
})
