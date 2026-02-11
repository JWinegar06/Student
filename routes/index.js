const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.tooeleTechFunction);

//Student routes
routes.use("/students", require("./students"));

//Admin routes
routes.get("/admin", myController.adminFunction);

// auth routes 
routes.use("/auth", require("./auth"));



module.exports = routes;
