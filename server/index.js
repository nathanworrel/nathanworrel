// server/index.tsx

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.post("/api/info", (req) => {
    console.log(req);
});