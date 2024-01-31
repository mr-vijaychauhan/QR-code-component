import { Outfit } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ 
    subsets: ["latin"] ,
    weight: ['400', '700'],
});

export const metadata = {
  title: "QR code component | Frontend Mentor",
  description: "QR code component | Frontend Mentor",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/_next/static/media/metadata/favicon-32x32.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-light-gray  ${outfit.className}` }>{children}</body>
    </html>
  );
}
