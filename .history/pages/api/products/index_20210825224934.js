import nc from "next-connect";

const handler = nc();

handler.get(( req) => {
  res.send(products);
});
