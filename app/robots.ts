import { MetadataRoute } from "next";
import { baseUrl } from "./sitemap";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "*",
            disallow: '/privacy'
        },
        sitemap: `${baseUrl}/sitemap.xml`
    }
}
