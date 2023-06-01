import Head from 'next/head';
import { Open_Sans } from 'next/font/google';
import { FC, PropsWithChildren, ReactNode } from 'react';
import Header from '~/components/Header';
import NavBar from '~/components/NavBar';
import BreadCrumbs, { ICrumb } from '~/components/BreadCrumbs';

const openSans = Open_Sans({ subsets: ['latin'] });

interface ILayoutProps extends PropsWithChildren {
  title: string;
  breadCrumbs?: Array<ICrumb>;
}

const AppLayout: FC<ILayoutProps> = ({ children, title, breadCrumbs }) => {
  return (
    <div style={openSans.style}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <NavBar />
      {breadCrumbs && <BreadCrumbs crumbs={breadCrumbs} />}
      {children}
    </div>
  );
};

export default AppLayout;
