import { RootProvider } from 'fumadocs-ui/provider/next';
import SearchDialog from '@/components/search';
import './global.css';
import { Figtree } from 'next/font/google';
import type { Metadata } from 'next';

const figtree = Figtree({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOCS_URL || 'http://localhost:3001'),
  title: { template: '%s | NEX101 Hub docs', default: 'NEX101 Hub docs' },
  description: 'Documentation for NEX101 Hub, the AI-first CRM and business hub.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={figtree.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog }}>{children}</RootProvider>
      </body>
    </html>
  );
}
