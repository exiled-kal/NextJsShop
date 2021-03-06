import nc from "next-connect";
import Product from "../../../models/Product";
import db from "../../../utils/db";
import data from '../../utils/'

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
});

export default handler;
