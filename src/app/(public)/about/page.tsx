import AboutPage from "@/components/features/public/About/About";
import React from "react";

export const metadata = {
  title: "Labid Rahat | About",
  description: "A",
  icons: {
    icon: "../../public/logo/logo.png",
  },
};

const About = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default About;
