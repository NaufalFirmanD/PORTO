import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
});

export const metadata = {
  title: "Portofolio | Naufal Firman Dhani",
  description: "Portofolio pribadi saya sebagai seorang web developer yang berpengalaman dalam React.js, Next.js, dan teknologi web modern lainnya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-primary/30`}>
        <CustomCursor />
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}


