import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Frontend root page rendered");
  }, []);

  const pageStyles = {
    backgroundColor: "#f0f8ff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyles = {
    color: "#ff6347", 
    fontSize: "3rem",
  };

  return (
    <div style={pageStyles}>
      <h1 style={textStyles}>Welcome to the Frontend</h1>
    </div>
  );
}
