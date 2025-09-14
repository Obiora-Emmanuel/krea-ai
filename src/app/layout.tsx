import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";
import { NavBar } from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krea-style Landing",
  description: "Fluid, clean landing with ShadCN + Embla carousel",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
         attribute="class"
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
       <main className="flex flex-col min-h-screen">
        <NavBar/>
        <div className="flex-grow"> {children}</div>
        <Footer/>
       </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
