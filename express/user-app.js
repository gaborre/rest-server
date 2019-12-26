
/* global upload */

const config = require("./../config/config.json");
const userDao = require("./../dao/user-dao");

/**
 * 
 * @param {express} app
 * @param {express} upload
 * @returns {Object}
 */
exports.execute = function(app, upload) {
    
    app.get(config.user.get, userDao.getUser);
    
    app.post(config.user.insert, upload.array(), userDao.insertUser);
    
    app.delete(config.user.delete, upload.array(), userDao.deleteUser);
    
    app.put(config.user.update, upload.array(), userDao.updateUser);
};