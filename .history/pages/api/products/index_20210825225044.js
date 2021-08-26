import nc from "next-connect";
import db from '../../../'


const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  res.send(products);
});
