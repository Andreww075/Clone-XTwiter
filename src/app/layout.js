import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import News from "@/components/news";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clone-XTwitter",
  description: "X-Twitter clone coded with our little hands. (Nextjs and TailwindCss)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-6xl mx-auto">
          <aside>
            <Sidebar />
          </aside>

          <main>{children}</main>

          <section>
            <News />
          </section>
        </div>
      </body>
    </html>
  );
}
