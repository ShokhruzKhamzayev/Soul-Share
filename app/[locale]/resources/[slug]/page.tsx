import Date from "@/components/dateShow";
import DisqusComment from "@/components/disqus-comments";
import { fetchArticles, fetchDetailedArticle } from "@/lib";
import parse from 'html-react-parser';
import { Metadata } from "next";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

const oswald = Oswald({ subsets: ["latin"], weight: ['600', '700'] })

export async function generateMetadata({ params: { slug } }: {
    params: { slug: string }
}): Promise<Metadata> {
    const { article } = await fetchDetailedArticle(slug)
    return {
        title: article.title,
    }
}

export async function generateStaticParams() {
    const { articles } = await fetchArticles()
    return articles.map(({ slug }) => slug)
}

export default async function DetailedBlog({ params: { slug } }: {
    params: { slug: string }
}) {
    const { article } = await fetchDetailedArticle(slug)
    return (
        <div className="w-[90%] lg:max-w-[900px] mx-auto">
            <div className="flex flex-col gap-[50px] mt-[40px]">
                <div className="starter">
                    <h1 className={`text-center text-2xl md:text-4xl lg:text-5xl text-balance dark:text-yellow-200 text-[#2F4DE4] ${oswald.className}`}>{article.title}</h1>
                    <div className="my-[20px] text-xl font-semibold text-center dark:text-yellow-200 text-[#2F4DE4]">
                        {parse(article?.forSource?.html)}
                    </div>
                </div>
                <div className={`main article-page font-medium text-[17px]`}>
                    {parse(article.article.html as string)}
                </div>
                <div className="author flex justify-between items-center">
                    {
                        article.author.name && article.author.avatar.url ? (
                            <>
                                Written By:
                                <div className="flex items-center gap-[5px]">
                                    <Image src={article.author.avatar.url} alt="avatar of author" width={50} height={50} className="rounded-[50%]" />
                                    <h2>{article.author.name}</h2>
                                </div>
                            </>
                        ) : (
                            <>
                                <p>Written By:</p>
                                <h2>Anonymous101</h2>
                            </>
                        )
                    }
                </div>
                <div>
                    <Link href={'/resources'} className="flex items-center gap-[7px] justify-center underline hover:dark:text-yellow-200 hover:text-[#2F4DE4] w-fit mx-auto transition-all duration-300">
                        <BiChevronLeft size={32} />
                        Back to Mental Health Resources
                    </Link>
                </div>
                <div className="dark:text-yellow-200 text-[#2F4DE4] text-right font-bold">
                    <Date dateString={article?.updatedAt} />
                </div>
            </div>
            <div className="mt-[40px]">
                <DisqusComment card={article} id={article?.id} />
            </div>
        </div>
    )
}
