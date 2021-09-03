require('dotenv').config()

const twilioMessage = () => {
  console.log('USING TWILIO MESSAGE FUNCTION')
  const client = require("twilio")(process.env.ACCOUNTSID, process.env.AUTHTOKEN);
  client.messages
  .create({
    body: "Your order has been received, we are working on it now!",
    from: process.env.TWILIONUMBER,
    to: process.env.MYNUMBER,
  })
  .then((message) => console.log("MESSAGE", message))
  .catch((error) => console.log('TWILIO ERROR', error))
  .done();
}

export default twilioMessage;
