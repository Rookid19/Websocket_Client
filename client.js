const { addDoc, doc, getFirestore, collection } = require("firebase/firestore");
const WebSocket = require("ws");
const { db } = require("./firebase");

const serverUrl = "ws://localhost:3004";

const ws = new WebSocket(serverUrl);

ws.on("open", function () {
   const users = [
      {
         id: "acct_273wbuwbu",
         firstName: "Grey",
         lastName: "Hennesay",
         price: 130,
         shares: 0.129347,
         email: "test@123.com",
      },
      {
         id: "acct_2537839j3hewjw",
         firstName: "Rae",
         lastName: "Morgan",
         price: 60,
         shares: 0.2916,
         email: "test@yahoo.com",
      },
      {
         id: "acct_2537839j3hewjw",
         firstName: "Rae",
         lastName: "Moo",
         price: 60,
         shares: 0.2916,
         email: "test@gmail.com",
      },
      {
         id: "acct_356679j3hewjw",
         firstName: "Rae",
         lastName: "Aban",
         price: 60,
         shares: 0.2916,
         email: "test@uk.com",
      },
      {
         id: "acct_265463hewjw",
         firstName: "Joe",
         lastName: "Poyle",
         price: 200,
         shares: 0.7916,
         email: "test@us.com",
      },
   ];

   setInterval(() => {
      // console.log(a);
      for (let i in users) {
         // let val = (users[i].price + stockPrice) * users[i].shares;
         // ws.binaryType = "arraybuffer";

         ws.send(JSON.stringify(users[i]));
         // ws.send({
         //    "message",
         //    val
         // })
      }
   }, 60000);
});

ws.on("message", function (msg) {
   console.log("Message form the server: " + msg);
});
