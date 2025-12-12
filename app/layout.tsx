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
        <header>
          <Navbar />
        </header>

        <main className="bg-background text-foreground min-h-screen pt-[10vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
