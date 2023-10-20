import { relative } from 'path';
import './globals.css';
import { Footer, NavBar } from './components';

export const Metadata = {
  title: 'Kho xe',
  description: 'Khám phá xe tốt nhất thế giới',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
