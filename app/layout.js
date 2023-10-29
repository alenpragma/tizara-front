import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/_navbar/Navbar";
import Footer from "./_components/_footer/Footer";
import { Montserrat } from "next/font/google";

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
      <body className={`bg-primary-bg ${montserrat.className} text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
