require("dotenv").config();
const express = require("express");
const app = express();
const grades = require("./routes/grades");

app.use(express.json());
app.use("/api/grades", grades);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
})
