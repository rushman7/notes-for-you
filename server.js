const express = require('express');
const apiRoutes = require('./apiRoutes/apiRoutes');
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', apiRoutes);

server.get("/", (req, res) => {
  res.send({ msg: "Server is up and running" });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`\n=== API running on ${PORT} ===\n`));