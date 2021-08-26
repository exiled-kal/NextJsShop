import nc from "next-connect";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.
  res.send(products);
});
