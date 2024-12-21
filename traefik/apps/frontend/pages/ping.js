import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page1() {
  useEffect(() => {
    console.log("Frontend Ping rendered");
  }, []);

  const pageStyles = {
    backgroundColor: "#ffebcd",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyles = {
    color: "#4682b4",
    fontSize: "3rem",
  };

  return (
    <div style={pageStyles}>
      <h1 style={textStyles}>Ping - Pong</h1>
    </div>
  );
}
