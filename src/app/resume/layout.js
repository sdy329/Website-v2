import '@/app/main.css';
import '@/app/personal.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: "Spencer Yates Resume",
  charset: "utf-8",
  openGraph: {
    locale: "en_US",
    site_name: "Resume - Spencer Yates",
    type: "website",
    title: "Resume - Spencer Yates",
    description: "Spencer Yates is a software engineer looking to build digital experiences for the future.",
    url: "https://www.sdy329.com/resume"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
