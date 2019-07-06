const express = require('express');
require('./db/mongoose.js');
const User = require('./models/user');
const Futsal = require('./models/futsal');
const userRouter = require('./routers/user');
const futsalRouter = require('./routers/futsal');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(futsalRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
// const accountSid = 'ACaae9444093b6b64ae72d81dc6ff97c2d';
// const authToken = '8d7fa8434f56542b81914fe85f3ee484';
// const client = require('twilio')(accountSid, authToken);

// client.verify
//   .services('VAec698bdac64fe79b555e0f91d2ce307b')
//   .verifications.create({ to: '+9779803622795', channel: 'sms' })
//   .then(verification => console.log(verification.sid));

// client.verify
//   .services('VAec698bdac64fe79b555e0f91d2ce307b')
//   .verifications('VEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
//   .fetch()
//   .then(verification => console.log(verification.status));
