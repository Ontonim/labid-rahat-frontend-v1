import React from "react";
import backgroundImage from "../../../public/images/background.jpg";

const Background = () => {
  return (
    <div className="absolute inset-0">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Grid Overlay Layer */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2, 89, 15, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2, 89, 15, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default Background;
