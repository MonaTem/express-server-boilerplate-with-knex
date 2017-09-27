//routed from '/api/session/'
const express = require('express')
const router = express.Router()
//redirect all to home
router.all('/', (req,res) => {
    res.redirect('/api/posts')
})
//SIGNUP
router.get('/signup', (req, res) => {
    res.render('signup')
})
router.post('/signup', (req, res) => {
    res.send('post: signup')
})
//LOGIN
router.get('/login', (req, res) => {
    res.render('login')
})
router.post('/login', (req, res) => {
    res.send('post: login')
})

module.exports = router
