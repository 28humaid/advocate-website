import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { LOGO } from "@/utils/Logo";
import { NAV_LINKS } from "@/utils/Navlinks";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Advocate Alamgir | Civil Lawyer – Delhi District & High Court",
  description: "Advocate Alamgir – 32+ years of civil law experience in Delhi. Property disputes, family matters, MACT & more. Call for a consultation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <Navbar logo={LOGO} links={NAV_LINKS} />
        <main>{children}</main>
      </body>
    </html>
  );
}
