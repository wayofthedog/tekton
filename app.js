const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/customer', function (req, res) {
    var value = null;
    var value = req.header('X-Consumer-ID');
    if (value != null){
        return res
            .status(200)
            .json({ brand: value });
        }
        else {
        res.status(400).json({ message: "Invalid header" });
        }
    });
app.listen(port, () => {
  console.log(`running at port ${port}`);
});

