const { async } = require("@firebase/util");
const { collection, query, getDocs, where } = require("firebase/firestore");
const WebSocket = require("ws");

const { db } = require("./firebase");

const serverUrl = "ws://localhost:3004";

const ws = new WebSocket(serverUrl);

ws.on("open", async function () {
   // setInterval(async () => {
   // emails = [];
   const q = query(collection(db, "UserInfo"));
   const querySnapshot = await getDocs(q);
   querySnapshot.forEach(async (doc) => {
      const q = query(
         collection(db, "UserInfo", doc.data().email, "MyStocks")
         // where("type", "==", "purchase")
      );
      const querySnapshot = await getDocs(q);
      let arr = [];
      querySnapshot.forEach(async (doc) => {
         // ws.send(JSON.stringify(doc.data()));
         arr.push({ ticker: doc.data().ticker, email: doc.data().email });
         console.log(arr);
      });

      // emails.push(doc.data().email);
      // for (let i in emails) {
      // let val = (users[i].price + stockPrice) * users[i].shares;
      // ws.binaryType = "arraybuffer";
      // ws.send({
      //    "message",
      //    val
      // })
      // }
   });
   // console.log(emails.length);
   // }, 1000);
});

ws.on("message", function (msg) {
   console.log("Message form the server: " + msg);
});
