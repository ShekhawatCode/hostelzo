'use client';
import { LayoutProvider } from '../layout/context/layoutcontext';
import { PrimeReactProvider } from 'primereact/api';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from '../../../libs/api/context/auth/AuthProvider';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.css';
import '../styles/demo/Demos.css';
import { useEffect } from 'react';
import axios from 'axios';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const queryClient = new QueryClient();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          id="theme-css"
          href={`/themes/lara-light-indigo/theme.css`}
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <PrimeReactProvider>
          <QueryClientProvider client={queryClient}>
            <LayoutProvider>
              <AuthProvider>{children}</AuthProvider>
            </LayoutProvider>
          </QueryClientProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
