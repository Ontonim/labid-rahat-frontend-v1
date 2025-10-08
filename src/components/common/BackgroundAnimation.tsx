"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/map.json";

const BackgroundAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: "100%",
          height: "100%",
          opacity: isMobile ? 0.5 : 0.7,
        }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: true,
          hideOnTransparent: true,
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
