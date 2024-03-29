import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const league = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Marc Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={league.className}>
      <body className={"bg-black text-white relative"}>
        <div className="absolute -left-10 h-[500px] w-[500px] bg-orange-500 opacity-70 rounded-full blur-2xl">
          &nbsp;
        </div>
        {children}
      </body>
    </html>
  );
}
