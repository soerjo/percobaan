const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world by soerjo");
});

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
