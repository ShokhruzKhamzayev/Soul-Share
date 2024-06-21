import FilterButtons from "@/components/filterButtons";
import Hero from "@/components/hero";
import HeroCards from "@/components/heroCards";

type PageProps = {
    searchParams: {
        lang: string,
        r: number
    },
    params: {
        locale: string
    }
}

export default function Home({ searchParams: { lang, r }, params: { locale } }: PageProps) {
    return (
        <div className="custom-container">
            <Hero locale={locale} />
            <FilterButtons />
            <HeroCards lang={lang} r={r} />
        </div>
    );
}