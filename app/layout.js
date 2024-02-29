// import Nav from "@/app/(components)/Nav";
import "./globals.css";
import { Inter } from "next/font/google";


import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  manifest: "/manifest.json",
  title: "Orgniz App",
  description: "Creating events for non profits.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen max-w-screen-lg">
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}

          </div>
        </div>
      </body>
    </html>
  );
}