import "./globals.css";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import get_started_logo from "../assets/images/get_started_logo.png";

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
        <div className="flex-grow overflow-y-auto text-default-text">
          <div className="flex flex-col m-4">
            <div >
              <Image
                alt="app logo"
                src={get_started_logo}
                width={220}
                height={100}
              />
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}