const accountSid = 'ACaae9444093b6b64ae72d81dc6ff97c2d';
const authToken = '8d7fa8434f56542b81914fe85f3ee484';
const client = require('twilio')(accountSid, authToken);

const sendCodeToMobilie = async (req, res, next) => {
  try {
    const phoneNumber = req.body.phone;
    client.verify
      .services('VAec698bdac64fe79b555e0f91d2ce307b')
      .verifications.create({ to: phoneNumber, channel: 'sms' })
      .then(verification => console.log(verification.sid));
    next();
  } catch (error) {
    res
      .status(401)
      .send('Please enter a valid phone number with + and country code');
  }
};

module.exports = sendCodeToMobilie;
