import { Quicksand, Ubuntu } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import Footer from "./components/footer";

const fibertronic_headlines = Ubuntu({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-headline'
});

const fibertronic_text = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-text'
})

export const metadata = {
  title: "Fibertronic",
  description: "Ihr zuverlässiger Partner für Glasfaser, Einzieh- und Einbautechnik, Datennetzwerktechnik und Fernmeldebau",
  keywords: ['Glasfaser', 'Einziehtechnik', 'Einbautechnik', 'Datennetzwerktechnik', 'Fernmeldebau', 'Glasfaser Butzbach', 'Glasfaser Technik', 'Deutsche Glasfaser', 'Fernmeldebau Butzbach', 'Datennetzwerktechnik Butzbach' ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${fibertronic_headlines.variable} ${fibertronic_text.variable} scroll-smooth`}>
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
