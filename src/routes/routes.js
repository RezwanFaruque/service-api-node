const express = require('express');
const router = express.Router();
const category = require('../services-modules/category/categoryService');

// IMPORT HTTPREQEST COMMON FILE
const httpRequest = require('../common/common');


httpRequest(router,'GET','/categories',category.getAllCategories);




module.exports = router;