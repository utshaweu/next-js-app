"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const placeOrder = () => {
    alert("Order Placed");
    router.push("/");
  };
  return (
    <div>
      <h1>Product Page</h1>
      <li>Buy iPhone 11</li>
      <button onClick={placeOrder}>Confirm Order</button>
    </div>
  );
};

export default page;
