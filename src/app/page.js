"use client";
import React from "react";
import State from "./State";

export default function Home() {
  const fun = () => {
    // eslint-disable-next-line no-undef
    alert("Hello Next JS");
  };
  return (
    <main>
      <button onClick={fun}>Click Me</button>
      <State />
    </main>
  );
}
