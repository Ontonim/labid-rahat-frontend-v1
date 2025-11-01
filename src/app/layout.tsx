import "./globals.css";
import { Lato } from "next/font/google";
export const metadata = {
  title: "Labid Rahat - World History Storyteller",
  description:
    "I'm a Bangladeshi content creator dedicated to explaining complex global issues in simple, visual ways. Through maps, real-world examples, and in-depth research, I help students and curious minds understand how the world works.",
  icons: {
    icon: "../../public/logo/logo.png",
  },
};

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={lato.variable}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
