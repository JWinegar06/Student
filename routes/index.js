const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.tooeleTechFunction);
//Student routes
routes.use("/students", require("./students"));
routes.get("/admin", myController.adminFunction);

module.exports = routes;
