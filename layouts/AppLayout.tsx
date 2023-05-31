import Head from 'next/head';
import { Open_Sans } from 'next/font/google';
import { FC, PropsWithChildren, useState } from 'react';

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
      {children}
    </div>
  );
};

export default AppLayout;
