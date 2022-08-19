const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorMiddleware");
// const connectDB = require("../backend/models/index");
const PORT = process.env.PORT || 8000;
//connect to Database
// connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//testing route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Sequalize Testing" });
});

//Routes
app.use("/api/insert", require("./routes/insertRoutes"));
app.use("/api/query", require("./routes/queryRoutes"));
app.use("/api/association", require("./routes/associationRoutes"));
// app.use("/api/tickets", require("./routes/ticketRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} `);
});
