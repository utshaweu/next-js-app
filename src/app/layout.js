"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Next JS App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {pathname !== "/userList" ? (
          <ul>
            <li>
              <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${pathname === "/about" ? "active" : ""}`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/userList" className={`${pathname === "/userList" ? "active" : ""}`}>
                User List
              </Link>
            </li>
            <li>
              <Link href="/registration" className={`${pathname === "/registration" ? "active" : ""}`}>
                Registration
              </Link>
            </li>
            <li>
              <Link href="/product" className={`${pathname === "/product" ? "active" : ""}`}>
                Product
              </Link>
            </li>
          </ul>
        ) : (
          <Link href="/">Back to Home</Link>
        )}
      </body>
    </html>
  );
}
