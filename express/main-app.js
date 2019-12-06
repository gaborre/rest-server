
/* global exports, require */

const multer = require('multer');
const upload = multer();
const userApp = require("./../express/user-app");

/**
 * 
 * @param {express} app
 * @returns {Object}
 */
exports.execute = function(app) {
    
    userApp.execute(app, upload);
};