const express = require("express");
const app = express();
const port = 3002;

app.use(express.static("public"));
app.use(express.json());

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/product');
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => console.log(`Server listen in port ${port}\n http://localhost:${port}`));