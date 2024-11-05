const express = require('express');
const router = express.Router();


// IMPORT HTTPREQEST COMMON FILE
const httpRequest = require('../common/common');


httpRequest(router,'GET','/home');




module.exports = router;