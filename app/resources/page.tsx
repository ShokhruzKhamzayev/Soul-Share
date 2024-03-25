'use client'
import CustomImage from "@/components/customImage"
import Date from "@/components/dateShow";
import { fetchArticles } from "@/lib"
import { article } from "@/lib/index.t";
import parse from 'html-react-parser';
import Link from "next/link";
import { useEffect, useState } from "react";
import { Oswald, Montserrat } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ['400', '500', '600'] })

export default function ResourcesPage() {
    const [allArticles, setAllArticles] = useState<article[]>([])

    useEffect(() => {
        getAllArticles()
    }, [])

    async function getAllArticles() {
        const { articles }: any = await fetchArticles()
        setAllArticles(articles)
    }
    return (
        <div className='custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[20px] md:gap-x-[30px] md:gap-y-[30px] py-[23px]'>
            {
                allArticles.map((article, index) => (
                    <Link href={{
                        pathname: `/resources/${article.slug}`,
                        query: {
                            slug: article.slug
                        }
                    }} key={index} className="w-auto h-full gap-[20px] border dark:border-yellow-200 border-[#2F4DE4] p-[15px] lg:p-[30px] rounded-[15px] flex flex-col justify-between">
                        <div className="relative w-full h-[200px]">
                            {
                                article.image.url ? (
                                    <CustomImage src={article?.image?.url} alt={article?.title} />
                                ) : ''
                            }
                        </div>
                        <div className="text-center">
                            <h1 className={`text-center text-xl md:text-2xl lg:text-3xl font-bold mb-[20px] dark:text-yellow-200 text-[#2F4DE4] line-clamp-2 ${oswald.className}`}>{article?.title}</h1>
                            <div className="tracking-wide font-medium line-clamp-4">
                                {parse(article?.excerpt?.html as string)}
                            </div>
                            <div className="mt-[20px] text-right dark:text-yellow-200 text-[#2F4DE4] font-bold">
                                <Date dateString={article?.updatedAt} />
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
