"use client";
import React from "react";
import State from "./State";
import { useRouter } from "next/navigation";

export default function Home() {
  const Router = useRouter();
  const fun = () => {
    // eslint-disable-next-line no-undef
    alert("Hello Next JS");
  };
  return (
    <main>
      <button onClick={fun}>Click Me</button>
      <State />
      <button type="button" onClick={() => Router.push("/class")} style={{ marginTop: "10px"}}>
        Go to class page
      </button>
    </main>
  );
}
