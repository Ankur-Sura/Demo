import express from "express";
import sum from "./sum.js";
const app = express();
const port = 8000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/home", async (req, res) => {
    res.json({ 
        msg: "I am the root" });
});

app.get("/getSum/:a/:b", async (req, res) => {
    const { a, b } = req.params;    // req.params is used to get the parameters from the url which is in the form of /getSum/1/2
    res.json({
        ans: sum(parseInt(a), parseInt(b)) });  // parseInt is used to convert the string to a number
});