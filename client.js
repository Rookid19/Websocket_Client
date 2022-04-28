const { async } = require("@firebase/util");
const { collection, query, getDocs } = require("firebase/firestore");
const WebSocket = require("ws");

const { db } = require("./firebase");

const serverUrl = "ws://localhost:3004";

const ws = new WebSocket(serverUrl);

ws.on("open", async function () {
   setInterval(async () => {
      // emails = [];
      const q = query(collection(db, "UserInfo"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
         emails.push(doc.data().email);
      });
      // console.log(emails.length);
  
   }, 10000);
});

ws.on("message", function (msg) {
   console.log("Message form the server: " + msg);
});
