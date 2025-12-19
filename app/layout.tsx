import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  Inter,
  Roboto,
  Poppins,
  Playfair_Display,
  Montserrat,
  Lora,
  Open_Sans,
  Raleway,
  Merriweather,
  Ubuntu,
  Nunito,
  PT_Sans
} from 'next/font/google'
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-roboto' })
const poppins = Poppins({ weight: ['300', '400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
const merriweather = Merriweather({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-merriweather' })
const ubuntu = Ubuntu({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-ubuntu' })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const ptSans = PT_Sans({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-ptsans' })

export const metadata: Metadata = {
  title: "Uihaven",
  description: "One place for all your UI needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` 
${inter.variable} 
        ${roboto.variable} 
        ${poppins.variable} 
        ${playfair.variable} 
        ${montserrat.variable} 
        ${lora.variable}
        ${openSans.variable}
        ${raleway.variable}
        ${merriweather.variable}
        ${ubuntu.variable}
        ${nunito.variable}
        ${ptSans.variable} 
antialiased
`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: "99px",
              padding: "8px 12px 8px 18px",
              borderBottom: "1px solid rgba(40, 70, 255, 0.4)",
              borderLeft: "1px solid rgba(40, 70, 255, 0.3)",
              borderRight: "1px solid rgba(40, 70, 255, 0.3)",
            }
          }}
        />
        <header>
          <Navbar />
        </header>

        <main className="bg-linear-to-b from-background to-primary/10 text-foreground min-h-dvh pt-[10vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
