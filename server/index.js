const cors = require("cors");
const pool = require("./connection");
const path = require("path");

const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



