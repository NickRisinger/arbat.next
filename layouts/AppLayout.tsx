import Head from 'next/head';
import { Open_Sans } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';
import Header from '~/components/Header';
import NavBar from '~/components/NavBar';

const openSans = Open_Sans({ subsets: ['latin'] });

interface ILayoutProps extends PropsWithChildren {
  title: string;
}

const AppLayout: FC<ILayoutProps> = ({ children, title }) => {
  return (
    <div style={openSans.style}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <NavBar />
      {children}
    </div>
  );
};

export default AppLayout;
