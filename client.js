const { collection, query, getDocs } = require("firebase/firestore");
const WebSocket = require("ws");

const { db } = require("./firebase");

const serverUrl = "ws://localhost:3004";

const ws = new WebSocket(serverUrl);

ws.on("open", async function () {
   const emails = [];

   const q = query(collection(db, "UserInfo"));
   const querySnapshot = await getDocs(q);
   querySnapshot.forEach(async (doc) => {
      emails.push(doc.data().email);
   });
   // setInterval(() => {
   // console.log(a);
   for (let i in users) {
      // let val = (users[i].price + stockPrice) * users[i].shares;
      // ws.binaryType = "arraybuffer";
      ws.send(JSON.stringify(emails[i]));
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
