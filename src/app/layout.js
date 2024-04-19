import '@/app/main.css';
import '@/app/personal.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: "Spencer Yates Portfolio",
  charset: "utf-8",
  openGraph: {
    locale: "en_US",
    site_name: "Spencer Yates",
    type: "website",
    title: "Spencer Yates",
    description: "Spencer Yates is a software engineering student at Northern Kentucky University looking to build digital experiences for the future.",
    url: "https://www.sdy329.com"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
