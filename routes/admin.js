const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const products = [];

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Products'});
})

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title, imageUrl: req.body.imageUrl , price: req.body.price, description: req.body.description})
    res.redirect('/');
});



exports.routes = router;
exports.products = products;