require('dotenv').config();

import express from "express";
import routes from "./routes";

const PORT = process.env.PORT || 1738;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use Express Router modules for routing
app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});

  