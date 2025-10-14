"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const checkUser = () => {
    const res = localStorage.getItem("token");
    const userToken = JSON.parse(res);
    if (userToken) {
      redirect("/products");
    } else {
      redirect("/login");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return <div></div>;
}
