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
         price: 10,
         shares: 5,
         email : "test@123.com"
      },
      {
         id: "acct_2537839j3hewjw",
         firstName: "Rae",
         lastName: "Morgan",
         price: 20,
         shares: 10,
         email: "test@yahoo.com"
      },
   ];

   // setInterval(() => {
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
   // }, 3000);
});

ws.on("message", function (msg) {
   console.log("Message form the server: " + msg);
});
