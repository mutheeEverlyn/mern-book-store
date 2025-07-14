const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require('helmet');

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require('dotenv').config()

// middleware
app.use(express.json());
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://mern-book-store-pzof.vercel.app' // deployed frontend domain
    ],
    credentials: true
}))
app.use(helmet());

// routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route")
const userRoutes =  require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

// Health check endpoint
app.get('/health', async (req, res) => {
  const dbState = mongoose.connection.readyState;
  res.json({
    server: "ok",
    db: dbState === 1 ? "connected" : "disconnected"
  });
});

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected successfully!");
    app.use("/", (req, res) => {
      res.send("Book Store Server is running!");
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Stop the server if DB connection fails
  }
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
