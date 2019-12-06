
/* global exports */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/**
 * 
 * @param {Array} mainApp
 * @param {callback} callback
 * @returns {Object}
 */
exports.startService = function(mainApp, callback) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    mainApp.execute(app);
    app.listen(8080, callback);
};
