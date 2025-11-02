import ContactPage from "@/components/features/public/Contact/Contact";
import React from "react";

export const metadata = {
  title: "Labid Rahat | Contact",
  description:
    "Have a question or want to collaborate? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  icons: {
    icon: "../../public/logo/logo.png",
  },
};

const Contact = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default Contact;
