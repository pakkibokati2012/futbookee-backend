const accountSid = 'ACaae9444093b6b64ae72d81dc6ff97c2d';
const authToken = '8d7fa8434f56542b81914fe85f3ee484';
const client = require('twilio')(accountSid, authToken);

const verifyPhoneNumber = async (req, res, next) => {
  try {
    const phoneNumber = req.body.phone;
    client.verify
      .services('VAec698bdac64fe79b555e0f91d2ce307b')
      .verificationChecks.create({
        to: req.body.phone,
        code: req.body.code.toString()
      })
      .then(verification_check => {
        if (verification_check.valid === true) {
          return next();
        }
        throw new Error('Provided code is not valid!');
      })
      .catch(error => res.status(401).send(error));
  } catch (error) {
    res.status(401).send('Could not verify phone number');
  }
};

module.exports = verifyPhoneNumber;
