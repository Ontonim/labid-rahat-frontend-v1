import TeamSection from "@/components/features/public/Team/TeamSection";
import React from "react";

export const metadata = {
  title: "Labid Rahat - Meet Our Team",
  description:
    "Dedicated creators exploring the world's history and geography through compelling video content",
  icons: {
    icon: "../../public/logo/logo.png",
  },
};

const Team = () => {
  return (
    <div>
      <TeamSection />
    </div>
  );
};

export default Team;
