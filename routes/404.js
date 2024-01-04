const express = require('express');
const router = express.Router(); 
const notFoundController = require('../controllers/404controller');

router.use(notFoundController.get404);

module.exports = router;