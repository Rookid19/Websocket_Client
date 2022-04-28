const { addDoc, doc, getFirestore, collection } = require("firebase/firestore");
const WebSocket = require("ws");
const { test } = require("./data");
const { db } = require("./firebase");

const serverUrl = "ws://localhost:3004";

const ws = new WebSocket(serverUrl);

ws.on("open", function () {


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
   // }, 60000);
});

ws.on("message", function (msg) {
   console.log("Message form the server: " + msg);
});
