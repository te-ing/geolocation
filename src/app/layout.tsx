import 'the-new-css-reset/css/reset.css';
import localFont from 'next/font/local';
import './global.css';

const SpoqaHanSansNeo = localFont({
  src: [
    {
      path: './fonts/SpoqaHanSansNeo-Bold.woff2',
      weight: '700',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Light.woff2',
      weight: '300',
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={SpoqaHanSansNeo.className}>
      <body>{children}</body>
    </html>
  );
}
