const express = require("express");
const colors = require("colors");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db.js");
dotenv.config({ path: "./config/config.env" });
const swaggerJsdoc = require("swagger-jsdoc"),
      swaggerUi = require("swagger-ui-express");
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
const apiRoutes = require("./routers/transaction");
const { get_SwaggerOptions } = require("./config/swaggerOptions.js");

app.use(express.json());

if (process.env.NODE_ENV == "development") app.use(morgan("dev"));

app.use("/api/transaction", apiRoutes);

// add swagger route
const specs = swaggerJsdoc(get_SwaggerOptions(process.env.NODE_ENV,PORT,process.env.PROD_URL));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// Catch all requests that don't match any route
if (process.env.ENV?.trim() == "production") {
  app.use(express.static("./client/build"));
  // serve up production assets
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode at port: ${PORT}`.green.bold
  )
);
