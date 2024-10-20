import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { dbConnect } from "@/database/services/mongo";
import { Toaster } from "sonner";
import AuthProvider from "@/providers/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SpotLight",
  description: "A platform for users to discover events in their vicinity. Dive into building an intuitive interface, integrating location-based features, and curating event listings to enhance user engagement and foster community connections.",
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <AuthProvider>
          <Navbar />
          <main className="py-8">
            {children}
          </main>
        </AuthProvider>
        <Toaster  />
      </body>
    </html>
  );
}
