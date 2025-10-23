import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '韓国コスメポータル',
  description: '新商品や比較情報をいち早く届ける韓国コスメのニュースポータルサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
