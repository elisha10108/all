const indexR = require("./index");
const usersR = require("./users");
const prodsR = require("./prods");
const categoriesR  = require("./categories");



exports.corsAccessControl = (app) => {
  app.all('*', function (req, res, next) {
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,auth-token');
    next();
  });
}

exports.routesInit = (app) => {
  app.use("/", indexR);
  app.use("/users", usersR);
  app.use("/prods", prodsR);
  app.use("/categories", categoriesR);

  app.use((req,res) => {
    res.status(404).json({msg:"404 url page not found"})
  })
}