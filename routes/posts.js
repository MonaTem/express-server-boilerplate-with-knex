//routed from '/api/posts/'
const express = require('express')
const router = express.Router()
//MAIN
router.get('/', (req, res) => {
    res.render('posts')
})
router.post('/', (req, res) => {
    res.send('post: /api/posts')
})
//CREATE A POST
router.get('/create', (req, res) => {
    res.render('create')
})
router.post('/create', (req, res) => {
    res.send('post: /api/posts/create')
})

module.exports = router
