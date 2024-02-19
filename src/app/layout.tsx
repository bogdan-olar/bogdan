import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./(homePageComp)/NavBar";
import Footer from "./(homePageComp)/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Next Js Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className min-w-[350px] bg-doar-bej sm:bg-gradient-to-r from-dark-bej to-white-bej `}> 
      {/* //bg-gradient-to-r from-dark-bej to-white-bej */}

      <div className="flex flex-col w-full h-screen">
              <NavBar />
              <div className="w-full grow">
                {children}
              </div>
              <Footer />
      </div>

      </body>
    </html>
  );
}
