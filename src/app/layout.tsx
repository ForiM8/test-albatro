import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";

const geistSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
