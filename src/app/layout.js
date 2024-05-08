import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import News from "@/components/news";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clone-XTwitter",
  description:
    "X-Twitter clone coded with our little hands. (Nextjs and TailwindCss)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-6xl mx-auto">
          <aside className="hidden sm:inline border-r h-screen">
            <Sidebar />
          </aside>

          <main>{children}</main>

          <section className='lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]'>
            <div className='sticky top-0 bg-white py-2'>
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2"
              />
            </div>
            <News />
          </section>
        </div>
      </body>
    </html>
  );
}
