// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

// const accountSid = process.env.TWILIO_ACCOUNT_SID;

// copy auth token and sid from account and hardcode to test

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

const myNumber = "+16478719181";
const twilioNumber = "+12393120406";

//put vars in .env

const pickUpNotice = () => {
  client.messages
    .create({
      body: "Your food is ready for pickup.",
      from: twilioNumber,
      to: myNumber,
    })
    .then((message) => console.log("MESSAGE", message))
    .catch((error) => console.log(error))
    .done();
};

const orderReceivedNotice = () => {
  client.messages
    .create({
      body: "Thank you for your payment. Your order has been received, we are working on it now!",
      from: twilioNumber,
      to: myNumber,
    })
    .then((message) => console.log("MESSAGE", message))
    .catch((error) => console.log(error))
    .done();
};

export default { orderReceivedNotice, pickUpNotice };
// const done = true;

// if (done) {
//   pickUpNotice;
// } else {
//   orderReceivedNotice;
// }

//call as part of a handler
