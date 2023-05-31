import '~/assets/css/index.css';
import { Open_Sans } from 'next/font/google';
import Header from '~/components/Header';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className="text-base text-ablack leading-[22px]"
        style={openSans.style}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
