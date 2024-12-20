import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Aside } from '@/components/Aside';
import { Header } from '@/components/Header';
import { Inter } from 'next/font/google';
import { cn } from '@/components/lib/utils';
import { getDictionary } from './dictionaries';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume page for frondend dev',
};

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'nl' }];
}
type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          inter.className,
          'antialiased ',
        )}
      >
        <div className="max-w-[1240px] mx-auto p-4 grid grid-cols-[30%_1fr] grid-rows-[auto_1fr] gap-8 gap-y-4 max-[992px]:grid-cols-1 max-[992px]:grid-rows-none">
          <Aside className="max-[992px]:hidden" dict={dict} />
          <Header dict={dict} lang={lang} />
          {children}
        </div>
      </body>
    </html>
  );
}
