import "./globals.css";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import organize_brand_blue from "../public/icons/organize_brand_blue_512.png";
import logotype_3x from "../assets/images/logotype@3x.png";

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
        <div className=" flex flex-col justify-center overflow-y-auto">
          <div className="flex flex-col items-center m-4">
            <div>
              <Image
                alt="app logo"
                src={organize_brand_blue}
                width={220}
                height={100}
              />
            </div>
            <div>
              <Image
                alt="logo type"
                src={logotype_3x}
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
