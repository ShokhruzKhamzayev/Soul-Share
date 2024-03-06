import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Provider from "@/components/provider";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";
import { g_analytics } from "@/constants";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '800'] });

export const metadata: Metadata = {
  title: "Soul Share | Main",
  description: "Soul Share, site that you can share a part of your life with others, you can make viral friends also high possibility to find reasonable advices here",
  keywords: 'Anon, Anonymous, Soul Share, Soul Share, Soul Share, soul, share your life, see others life, about life, about future',
  authors: [{ name: 'Shokhrux', url: 'https://nextjs.org' }, { name: 'Jamshidbek' }],
  category: 'Sharing is Caring, sharing, cards, advices',
  publisher: 'Shokhruz',
  creator: 'Shokhruz'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${g_analytics}`} strategy="lazyOnload" />
      <Script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${g_analytics}');
      `}</Script>
      <head>
        <meta name="yandex-verification" content="3374da3e0a5976b9" />
        <meta name="google-site-verification" content="4Hu-5IwRuj911S7m7LAYDh4npv1BnRkb4U2UPBGYaTg" />
      </head>
      <body className={`${poppins.className} bg-[#F2F3FD] dark:bg-[#02030D] text-[#040720] dark:text-[#DFE2FB]`}>
        <Provider>
          <Header />
          <main>
            <ToastContainer
              position="top-right"
              autoClose={3500}
              newestOnTop={false}
              closeOnClick
              pauseOnHover={false}
              draggable
              transition={Bounce}
            />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
