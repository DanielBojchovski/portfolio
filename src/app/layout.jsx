import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Portfolio website",
  description: "This is portfolio website for Daniel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/*Navbar */}
          <Navbar />
          {/*SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
