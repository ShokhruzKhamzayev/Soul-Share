import { fetchArticles, fetchCardWithLang, fetchCardWithLangForSitemap } from "@/lib";
import { MetadataRoute } from "next";

export const baseUrl = 'https://soulshare.uz'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const { inboxes } = await fetchCardWithLangForSitemap()
    const { articles } = await fetchArticles()
    const inboxesSitemap: MetadataRoute.Sitemap = inboxes.map((card) => {
        return {
            url: `${baseUrl}/card/${card.id}`,
            lastModified: new Date(card.updatedAt),
            priority: 1,
            changeFrequency: 'monthly'
        }
    })
    const articlesSitemap: MetadataRoute.Sitemap = articles.map((article) => {
        return {
            url: `${baseUrl}/resources/${article.slug}`,
            changeFrequency: 'monthly',
            lastModified: new Date(article.updatedAt),
            priority: 1
        }
    })
    return [
        {
            url: `${baseUrl}`,
            changeFrequency: 'daily',
            priority: 1
        },
        {
            url: `${baseUrl}/about`,
            changeFrequency: 'monthly',
            priority: 0.5
        },
        {
            url: `${baseUrl}/contact`,
            changeFrequency: 'monthly',
            priority: 0.5
        },
        {
            url: `${baseUrl}/resources`,
            changeFrequency: 'daily',
            priority: 1
        },
        ...inboxesSitemap,
        ...articlesSitemap
    ]
}