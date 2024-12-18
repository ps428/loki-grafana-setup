import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Frontend root page rendered");
  }, []);

  return <h1>Welcome to the Frontend</h1>;
}
