import "./globals.css";
import { Inter } from "next/font/google";

// redux
import ReduxProvider from "@/redux/provider";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ulugbekdev",
  description: "Ulugbekdev's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>{children}</main>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
