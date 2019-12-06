
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
    
    app.get(config.user.getUser, userDao.getUser);
    
    app.post(config.user.insertUser, upload.array(), userDao.insertUser);
    
    app.delete(config.user.deleteUser, upload.array(), userDao.deleteUser);
    
    app.put(config.user.updateUser, upload.array(), userDao.updateUser);
};