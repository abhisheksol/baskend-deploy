const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(cors());
const portfolioRoute = require("./routes/portfolioRoute");
  
app.use(express.json());
 
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
const path = require("path");



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
