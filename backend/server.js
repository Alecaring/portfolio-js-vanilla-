const express = require("express");
const app = express();
const PORT = 3000;
const projectRoutes = require("./routes/projectRoutes");

// middleware
app.use(express.json());

// routes
app.use("/api", projectRoutes);



app.listen(PORT, () => {
    console.log(`server is running at ${PORT} - port`);
})
