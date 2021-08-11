const express = require("express");
const cors = require('cors')
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/open", (req, res) => {
    console.log("open");
    //enter code here to run engine
    return res.json({ message: "open" });
});

app.get("/close", (req, res) => {
    console.log("close");
    //enter code here to run engine
    return res.json({ message: "close" });
});