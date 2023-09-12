const express = require("express");
const app = express();
const {PORT} = require("./config.js")

app.use(express.static("public"));
app.use(express.json());

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/product');
const usersRouter = require("./routes/users");

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" })
});

app.listen(PORT, () => console.log(`Server listen in port ${PORT}\n http://localhost:${PORT}`));