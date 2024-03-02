import { fetchDetailedArticle } from "@/lib"
import parse from 'html-react-parser';
import Link from "next/link";

export default async function DetailedBlog({ searchParams }: {
    searchParams: { slug: string }
}) {
    const { slug } = searchParams
    const { article } = await fetchDetailedArticle(slug)
    return (
        <div className="custom-container flex flex-col gap-[50px]">
            <div className="starter">
                <h1 className="text-center text-2xl md:text-4xl lg:text-5xl text-balance dark:text-yellow-200 text-[#2F4DE4]">{article.title}</h1>
                <div className="my-[20px] text-xl font-bold">
                    {parse(article.excerpt.html)}
                </div>
                <Link href={article.source} className="flex justify-end items-end text-[20px] dark:text-yellow-200 text-[#2F4DE4]">The source</Link>
            </div>
            <div className="main">
                {parse(article.article.html as string)}
            </div>
        </div>
    )
}
