const WebSocket = require("ws");

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
      },
      {
         id: "acct_2537839j3hewjw",
         firstName: "Rae",
         lastName: "Morgan",
         price: 20,
         shares: 10,
      },
   ];

   setInterval(() => {
      let stockPrice = Math.floor(Math.random() * 798);
      // console.log(a);
      for (i in users) {
         let val = (users[i].price + stockPrice) * users[i].shares;
         // ws.send(JSON.stringify(i + " index ----> " + val));
         // ws.send({
         //    "message",
         //    val
         // })
      }
   }, 30000);
});

ws.on("message", function (msg) {
   console.log("Message form the server: " + msg);
});
