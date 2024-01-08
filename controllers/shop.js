const Product = require('../models/product');

exports.getProducts =  (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            docTitle: "All Products",
            currentRoute: '/products'
        });
    });
};

exports.getProduct = (req, res, nexr) => {
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect('/');
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            docTitle: "Shop",
            currentRoute: '/'
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        docTitle: 'Your Cart',
        currentRoute: '/cart'
    });

};
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        docTitle: 'Your Orders',
        currentRoute: '/orders'
    });

};

exports.getCheckout  = (req, res, next) => {
    res.render('shop/checkout', {
        docTitle: 'Checkout',
        currentRoute: '/checkout'
    });
};