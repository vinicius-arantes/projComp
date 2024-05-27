const app = require('./app');
const Loaders = require('./loaders');
require('dotenv').config();

const port = process.env.PORT;

Loaders.start();

app.listen(port, () => console.log(`Server is on at port ${port}`));