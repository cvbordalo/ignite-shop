import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
