
const utils = require("./../utils/utils");

exports.getUser = function(req, res) {
    try {
        console.log("query: " + JSON.stringify(req.query));
        console.log("params: " + JSON.stringify(req.params));
        console.log("body: " + JSON.stringify(req.body));
        console.log("headers: " + JSON.stringify(req.headers));
        let user = {
            _id: "1",
            name: "German",
            cel: "3013555555"
        };
        res.json(utils.getResponse(200, "User retrieved successfully", user));
    } catch(ex) {
        console.error(ex);
        res.json(utils.getResponse(500, ex, {}));
    }
};

exports.insertUser = function(req, res) {
    try {
        console.log("query: " + JSON.stringify(req.query));
        console.log("params: " + JSON.stringify(req.params));
        console.log("body: " + JSON.stringify(req.body));
        console.log("headers: " + JSON.stringify(req.headers));
        let saved = req && req.body ? req.body : {};
        res.json(utils.getResponse(200, "User saved successfully", saved));
    } catch(ex) {
        console.error(ex);
        res.json(utils.getResponse(500, ex, {}));
    }
};

exports.updateUser = function(req, res) {
    try {
        console.log("query: " + JSON.stringify(req.query));
        console.log("params: " + JSON.stringify(req.params));
        console.log("body: " + JSON.stringify(req.body));
        console.log("headers: " + JSON.stringify(req.headers));
        let updated = req && req.body ? req.body : {};
        res.json(utils.getResponse(200, "User updated successfully", updated));
    } catch(ex) {
        console.error(ex);
        res.json(utils.getResponse(500, ex, {}));
    }
};

exports.deleteUser = function(req, res) {
    try {
        console.log("query: " + JSON.stringify(req.query));
        console.log("params: " + JSON.stringify(req.params));
        console.log("body: " + JSON.stringify(req.body));
        console.log("headers: " + JSON.stringify(req.headers));
        res.json(utils.getResponse(200, "User deleted successfully", {}));
    } catch(ex) {
        console.error(ex);
        res.json(utils.getResponse(500, ex, {}));
    }
};
