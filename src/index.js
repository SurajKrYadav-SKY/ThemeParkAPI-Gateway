const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/serverConfig");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { BOOKING_SERVICE } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(morgan("combined"));

  const proxyMiddleware = createProxyMiddleware({
    target: BOOKING_SERVICE,
    changeOrigin: true,
  });

  app.use("/bookingservice", proxyMiddleware);

  app.get("/api/home", (req, res) => {
    return res.json({
      messsgage: "OK",
    });
  });

  app.listen(PORT, () => {
    console.log("Server started at port:", PORT);
  });
};

setupAndStartServer();
