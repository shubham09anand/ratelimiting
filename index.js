const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;
console.log(PORT);


app.use((req, res, next) => {
     console.log(`Request handled by ${PORT}`);
     next();
});

app.get("/api/v1/", (req, res) => {
     console.log("This is api/v1");
     res.status(200).json({
          version: "1.0.1"
     })
});

app.get("/api/v1/user", (req, res) => {
     console.log(req.originalUrl);
     res.status(200).json({
          name: "Shubham Anand",
          originalUrl: req.originalUrl
     })
});

app.get("/api/v1/auth", (req, res) => {
     res.status(200).json({
          token: "@12345"
     })
});

app.get("/server/health", (req, res) => {
     res.status(200).json({
          status: "ok"
     })
});

app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`);
})