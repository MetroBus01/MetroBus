const express = require("express");
const cors = require("cors");
const Count = require("./config")
const app = express();
app.use(express.json());
app.use(cors());
let glo=0;
app.get("/", async (req, res) => {
  // res.send('hello')
  const snap = await Count.get();
  // const snapshot = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  // const cc = snap.docs[2].data().count

  const cc = await Count.doc('euoU0KYinYIMcFFtzFZ7').get()
  const counter = cc.data().count
  console.log(counter)
  
  res.send({counter})
  //const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //res.send(list);
  // res.send(snapshot)
  // res.send(getDocs);
  // const snapshot = await getDocs(Count);
  // const result= snapshot.docs.map((doc)=>{
  //  return {
    
  //   ...doc.data()
  //  }
  // })
  // console.log("result",result);
});

app.post("/create", async (req, res) => {
  //const data = req.body;
  await Count.add({
    "cnt-psg":1
  });
  res.send({ msg: "Counter Added" });
});

app.post("/update", async (req, res) => {
  // const v1=app.get("/");
  // const snapshot = await Count.get();
  // console.log("Count value ",snapshot.doc.cnt-psg)
  // const snap = await Count.get();
  // const cc = snap.docs[3].data()
  // cc.count++

  const snap = await Count.doc('euoU0KYinYIMcFFtzFZ7')
  const coll = await snap.get()
  const dat = coll.data()
  console.log(req.query)
  dat.count+= Number(req.query.updateCount)
  snap.set(dat)


  // const snapshot = await getDocs(Count);
  // const result= snapshot.docs.map((doc)=>{
  //  return {
  //   id:doc.id,
  //   ...doc.data()
  //  }
  // })
  // console.log("result",result);
//   console.log(v1);
//   const id = req.body.id;
//   delete req.body.id;
//   //const data = req.body;
// const data=2;
// await Count.doc('euoU0KYinYIMcFFtzFZ7').set(cc);
  // await Count.doc(id).update(2+cc);
  res.send({ msg: "Incremented" });
});

// app.post("/delete", async (req, res) => {
//   const id = req.body.id;
//   await User.doc(id).delete();
//   res.send({ msg: "Deleted" });
// });
 app.listen(4000, () => console.log("Up & RUnning *4000"));
