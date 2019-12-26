
const expressService = require("./service/service");
const mainApp = require("./express/main-app");

expressService.startService(mainApp, function() {
    console.log("Waiting for request...");
});