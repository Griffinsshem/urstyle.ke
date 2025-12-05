import { Jost } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";


const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: "Urstyle.ke Premium Store",
  description: "High-quality fashion e-commerce store in Kenya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

