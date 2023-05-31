import { NextPage as InitNextPage } from 'next';
import type { AppProps as InitAppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

declare global {
  type NextPage<Props = {}> = InitNextPage<Props> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

  interface AppProps extends InitAppProps {
    Component: InitAppProps['Component'] & NextPage;
  }
}
