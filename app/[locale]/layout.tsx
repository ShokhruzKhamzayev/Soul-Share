import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Provider from "@/components/provider";
import { g_analytics } from "@/constants";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Toaster } from 'sonner'
import TranslationsProvider from "@/components/translationProvider";
import initTranslations from "../i18n";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '800'] });

export const metadata: Metadata = {
  title: "Soul Share | Main",
  description: "Soul Share, site that you can share a part of your life with others, you can make viral friends also high possibility to find reasonable advices here",
  keywords: 'Anon, Anonymous, Soul Share, Soul Share, Soul Share, soul, share your life, see others life, about life, about future',
  authors: [{ name: 'Shokhrux', url: 'https://nextjs.org' }, { name: 'Jamshidbek' }],
  category: 'Sharing is Caring, sharing, cards, advices',
  publisher: 'Shokhruz',
  creator: 'Shokhruz',
  verification: {
    yandex: '15bdd7be65c59bd2',
    google: '4Hu-5IwRuj911S7m7LAYDh4npv1BnRkb4U2UPBGYaTg'
  }
};

export default async function RootLayout({
  children,
  params: {
    locale
  }
}: {
  children: React.ReactNode,
  params: {
    locale: string
  }
}) {
  const { resources } = await initTranslations(locale, ['nav', 'main', 'buttons', 'about', 'contact'])
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${poppins.className} bg-[#F2F3FD] relative dark:bg-[#02030D] text-[#040720] dark:text-[#DFE2FB]`}>
        <GoogleAnalytics gaId={g_analytics} />
        <TranslationsProvider resources={resources} locale={locale} namespaces={['nav', 'buttons', 'main', 'about']}>
          <Provider>
            <NextTopLoader color="#2F4DE4" showSpinner={false} />
            <Header locale={locale} />
            <main>
              <Toaster />
              {children}
            </main>
            <div className="fixed z-[-10] bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute z-[-10] bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </Provider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
