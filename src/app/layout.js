import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProviders";
import { Toaster } from "@/components/ui/sonner";
import Home from "./page";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Harsh Singh",
  description:
    "Created a Portfolio WebApp to demonstrate all Project till my full-stack web development journey",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className={outfit.className}>
        <main className="max-w-[1700px] m-auto">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
