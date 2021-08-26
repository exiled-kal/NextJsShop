import nc from "next-connect";

const handler = nc();

handler.get((req, res) => {
    await db.
  res.send(products);
});
