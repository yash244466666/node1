const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts =  (req, res, next) => {
    Product.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('shop/index', {
            products: rows,
            docTitle: "All Products",
            currentRoute: '/products'
        });

    })
    .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
    .then(([product]) => {
        res.render('shop/product-detail', {
            product: product[0],
            docTitle: product.title,
            currentRoute: '/products'
        });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('shop/index', {
            products: rows,
            docTitle: "Shop",
            currentRoute: '/'
        });

    })
    .catch(err => console.log(err));

};

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for (const product of products) {
                const cartProductData = cart.products.find(prod => prod.id === product.id);
                if(cartProductData) {
                    cartProducts.push({productData: product, qty: cartProductData.qty})
                }
            }
            res.render('shop/cart', {
                docTitle: 'Your Cart',
                currentRoute: '/cart',
                products: cartProducts
            });
        })
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.deleteProduct(prodId, product.price);
        res.redirect('/cart');
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