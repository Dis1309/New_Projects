// const express= require('express')
// const app = express();
// const cors = require('cors')
// const port = 3000;
// app.use(cors());
// app.post( '/send-notification', async(context, event, callback) => {
//   const accountSid = "ACd31a849e0130c8a7ad75d1bb4d7b8d21";
//   const authToken = "6f1d932f2a951e37111e201a9354fb11";
//   const client = require('twilio')(accountSid, authToken);
//     client.Verify
//       .services("VA24c5a354616f3abbe0585e5aaca1fa94")
//       .verifications.create({ to: `+${event.phoneNumber}`, channel: "sms" })
//       .then((verification) => {
//         console.log(verification.status);
//         return callback(null);
//       })
//       .catch((e) => {
//         console.log(e);
//         return callback(e);
//       });
//   })
exports.handler = function (context, event, callback) {
  const client = context.getTwilioClient();

  client.verify
    .services(context.VERIFY_SERVICE_SID)
    .verifications.create({ to: `+${event.phoneNumber}`, channel: "sms" })
    .then((verification) => {
      console.log(verification.status);
      return callback(null);
    })
    .catch((e) => {
      console.log(e);
      return callback(e);
    });
};
