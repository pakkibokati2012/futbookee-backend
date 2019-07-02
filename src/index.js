const express = require('express');
require('./db/mongoose.js');
const User = require('./models/user');
const Futsal = require('./models/futsal');
const userRouter = require('./routers/user');
const futsalRouter = require('./routers/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
