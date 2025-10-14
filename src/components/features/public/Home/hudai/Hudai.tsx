"use client";
import Background from "@/components/common/Background";
import React from "react";

const Hudai = () => {
  return (
    <div className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[900px] overflow-hidden bg-white">
      <Background />
      <div className="container mx-auto">
        <h1 className="text-red-600 text-xl">
          This is Example components. please go to the
          src/components/features/public/Home/hudai/Hudai.tsx and see the instruction
        </h1>
        <p>
          {/* Use the same background style that I’ve applied here across every page and every section of the website. Also, #02590F is our primary color, so make sure to apply it consistently to maintain our brand identity. */}
        </p>
      </div>
    </div>
  );
};

export default Hudai;
