import AboutPage from "@/components/features/public/About/About";
import React from "react";

export const metadata = {
  title: "Labid Rahat | About",
  description:
    "I'm a Bangladeshi content creator dedicated to explaining complex global issues in simple, visual ways. Through maps, real-world examples, and in-depth research, I help students and curious minds understand how the world works.",
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
