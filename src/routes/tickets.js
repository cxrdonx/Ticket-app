const express = require('express');
const quequeController = require('../controllers/quequeController');
const router = express();

router.get('/', (req, res) =>{
    res.render('index', {
        title: 'Inicio'
    });
});

module.exports = router;