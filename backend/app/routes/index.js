const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const projectRoutes = require("./project.routes");

module.exports = (app) => {

    

    app.use("/api", userRoutes);
    app.use("/api/auth", authRoutes);
    app.use("/api/projects", projectRoutes);
};