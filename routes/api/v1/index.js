const express = require('express');

const router = express.Router();


const homeController=require('../../../controllers/api/v1/home_controller')
router.use('/students',require('./students'));
router.use('/',homeController.home)

module.exports = router;