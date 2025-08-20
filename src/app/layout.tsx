import "./globals.css";
import { Lato } from "next/font/google";
export const metadata = {
  title: "Labid Rahat",
  description: "A",
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
