const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);


app.get("/", (req,res) => {
  res.send("<h1>Hello Vercel</h1>")
})

// Start the server and listen on port 3000
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
