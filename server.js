const express = require("express")
const env = require("dotenv").config();
const app = express()
const static = require("./routes/static")
const expressLayouts = require("express-ejs-layouts")

// 1. Serve static files FIRST (CSS, images, etc.)
app.use(express.static("public")) // <-- Add this line here

// 2. View Engine and Layouts
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")

// 3. Your custom static route handler (from ./routes/static)
app.use(static)

// Index route
app.get("/", (req, res) => {
  res.render("index", { title: "Home" })
});

// Server setup
const port = process.env.PORT || 5500;
const host = process.env.HOST || "localhost";

app.listen(port, () => {
  console.log(`Server running on http://${host}:${port}`);
});
