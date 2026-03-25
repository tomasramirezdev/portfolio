import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Tomas Ramirez — UX/UI & Front-end Developer",
  description:
    "Diseño interfaces que convierten y código que escala. UX/UI Designer y Front-end Developer desde Córdoba, Argentina.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#050507",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-[100dvh] flex-col overflow-x-clip font-sans pb-[env(safe-area-inset-bottom,0px)]">
        {children}
      </body>
    </html>
  );
}
