const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        docTitle: 'Add Products', 
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true,
        currentRoute: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts =  (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            docTitle: "Shop",
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
            currentRoute: '/'
        });
    });
};