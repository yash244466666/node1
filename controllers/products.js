const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        docTitle: 'Add Products', 
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    products.push({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        description: req.body.description
    })
    res.redirect('/');
};

exports.getProducts =  (req, res, next) => {
    // console.log('shop.js', adminData.products);
    // const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {
        prods: products,
        docTitle: "Shop",
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};