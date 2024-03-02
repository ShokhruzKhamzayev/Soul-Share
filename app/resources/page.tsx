import CustomImage from "@/components/customImage"
import Date from "@/components/dateShow";
import { fetchArticles } from "@/lib"
import parse from 'html-react-parser';
import Link from "next/link";

export default async function ResourcesPage() {
    const { articles } = await fetchArticles()
    return (
        <div className='custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                articles.map((article, index) => (
                    <Link href={{
                        pathname: `/resources/${article.slug}`,
                        query: {
                            slug: article.slug
                        }
                    }} key={index} className="w-auto h-full flex flex-col gap-[20px] border dark:border-yellow-200 border-[#2F4DE4] p-[15px] lg:p-[30px] rounded-[15px]">
                        <div className="relative w-full h-[200px]">
                            <CustomImage src={article.image.url} alt={article.title} />
                        </div>
                        <div className="text-center">
                            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-[20px] dark:text-yellow-200 text-[#2F4DE4] line-clamp-2">{article.title}</h1>
                            <div className="tracking-wide font-medium line-clamp-4">
                                {parse(article.excerpt.html as string)}
                            </div>
                            <div className="mt-[20px] text-right dark:text-yellow-200 text-[#2F4DE4] font-bold">
                                <Date dateString={article.updatedAt}/>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
