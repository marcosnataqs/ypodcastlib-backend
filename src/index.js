const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 8080;
console.log(`Listen port: ${port}`);
app.listen(port);