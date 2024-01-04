// const products = [];

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
    // products.push({
    //     title: req.body.title,
    //     imageUrl: req.body.imageUrl,
    //     price: req.body.price,
    //     description: req.body.description
    // })
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts =  (req, res, next) => {
    // console.log('shop.js', adminData.products);
    // const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
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