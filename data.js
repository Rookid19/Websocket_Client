const { async } = require("@firebase/util");
const { query, collection, getDocs } = require("firebase/firestore");
const { db } = require("./firebase");

const emails = [];
exports.emails = emails;
export async function test() {
   const q = query(collection(db, "UserInfo"));
   const querySnapshot = await getDocs(q);
   querySnapshot.forEach(async (doc) => {
      emails.push(doc.data().email);
   });
}

// const users = [
//    {
//       id: "acct_273wbuwbu",
//       firstName: "Grey",
//       lastName: "Hennesay",
//       price: 130,
//       shares: 0.129347,
//       email: "test@123.com",
//    },
//    {
//       id: "acct_2537839j3hewjw",
//       firstName: "Rae",
//       lastName: "Morgan",
//       price: 60,
//       shares: 0.2916,
//       email: "test@yahoo.com",
//    },
//    {
//       id: "acct_2537839j3hewjw",
//       firstName: "Rae",
//       lastName: "Moo",
//       price: 60,
//       shares: 0.2916,
//       email: "test@gmail.com",
//    },
//    {
//       id: "acct_356679j3hewjw",
//       firstName: "Rae",
//       lastName: "Aban",
//       price: 60,
//       shares: 0.2916,
//       email: "test@uk.com",
//    },
//    {
//       id: "acct_265463hewjw",
//       firstName: "Joe",
//       lastName: "Poyle",
//       price: 200,
//       shares: 0.7916,
//       email: "test@us.com",
//    },
// ];
