import CustomImage from "@/components/customImage"
import { fetchArticles } from "@/lib"
import { RichText } from '@graphcms/rich-text-react-renderer';

export default async function ResourcesPage() {
    const { articles } = await fetchArticles()
    const content = {
        children: [
            {
                type: 'paragraph',
                children: [
                    {
                        bold: true,
                        text: articles[0].article.html,
                    },
                ],
            },
        ],
    };
    return (
        <div className='custom-container'>
            {
                articles.map((article, index) => (
                    <div key={index}>
                        <div className="relative w-[300px] h-[300px]">
                            <CustomImage src={article.image.url} alt={article.title} />
                        </div>
                        <div>
                            <h1>{article.title}</h1>
                            <RichText content={content} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
