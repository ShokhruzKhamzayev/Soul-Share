import FilterButtons from "@/components/filterButtons";
import Hero from "@/components/hero";
import HeroCards from "@/components/heroCards";

type PageProps = {
    searchParams: {
        lang: string
    },
    params: {
        locale: string
    }
}

export default function Home({ searchParams: { lang }, params: { locale } }: PageProps) {
    return (
        <div className="custom-container">
            <Hero locale={locale} lang={lang} />
            {lang}
            <FilterButtons />
            <HeroCards lang={lang} />
        </div>
    );
}