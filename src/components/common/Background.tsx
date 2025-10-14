import React from "react";

const Background = () => {
  return (
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(2, 89, 15, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(2, 89, 15, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
};

export default Background;
