import React from "react";
import { useRouter } from "next/router";

function shipping() {
  const router = useRouter();
  router.push('/login')
  return <div></div>;
}

export default shipping;
