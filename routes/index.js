module.exports = (app) => {
  app.use("/api/match", require("./match.routes"));
  app.use("/api", require("./auth.routes.js"));
};
