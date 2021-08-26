import nc from "next-connect";


const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  res.send(products);
});
