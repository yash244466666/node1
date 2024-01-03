//404 page
const express = require('express');
const router = express.Router(); 
const notFoundController = require('../controllers/404controller');

router.use(notFoundController.getNotFound);

module.exports = router;