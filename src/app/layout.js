import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "UK Visa Help Consultants",
  description:
    "Leading UK Visa Consultancy providing expert immigration advice for visa and settlement applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${plusJakartaSans.variable} font-jakarta antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
