import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/_navbar/Navbar";

import { Montserrat } from "next/font/google";
import RegistrationNow from "./_components/_registration-now/RegistrationNow";
import TizaraCoin from "./_components/_tizara-coin/TizaraCoin";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tizara",
  description: "Tizara a famous blockchain platform",
};

const montserrat = Montserrat({
  weight: ['100','400','500','600','700','800','900'],
  subsets:["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="https://i.postimg.cc/j2H0vdFX/favicon.png" sizes="any" />
      </head>
      <body className={`bg-primary-bg ${montserrat.className} text-white`}>
        <Navbar />
        {children}
        <TizaraCoin />
        <RegistrationNow/>
      </body>
    </html>
  );
}
