const { async } = require("@firebase/util");
const { collection, query, getDocs, where } = require("firebase/firestore");
const WebSocket = require("ws");

const { db } = require("./firebase");

const serverUrl = "ws://localhost:3004";

const ws = new WebSocket(serverUrl);

ws.on("open", async function () {
   setInterval(async () => {
      const q = query(collection(db, "UserInfo"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
         const q = query(
            collection(db, "UserInfo", doc.data().email, "MyStocks")
         );
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach(async (doc) => {
            const q = query(
               collection(
                  db,
                  "UserInfo",
                  doc.data().email,
                  "MyStocks",
                  doc.data().ticker,
                  "Details"
               )
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (document) => {
               ws.send(
                  JSON.stringify({
                     ticker: document.data().ticker,
                     email: doc.data().email,
                     shares: document.data().shares,
                  })
               );
            });
         });
      });
      // console.log(emails.length);
   }, 60000);
});

ws.on("message", function (msg) {
   console.log("Message form the server: " + msg);
});
