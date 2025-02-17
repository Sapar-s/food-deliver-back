import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("helloo woorld");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
