import nc from "next-connect";

const handler = nc();

handler.get((res, req) => {
  res.send(products);
});
