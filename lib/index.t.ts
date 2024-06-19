export interface CardType {
    id: string,
    message: string,
    language: string,
    updatedAt: string
}

export interface detailedCard {
    message: string,
    language: string,
    updatedAt: string
}

export interface LangDataProps {
    inboxes: CardType[]
}

export interface DetailedProps {
    inbox: detailedCard
}

export interface article {
    id: string,
    title: string,
    excerpt: {
        html: string
    },
    forSource: {
        html: string
    }
    author: {
        name?: string
        avatar: {
            url?: string
        }
    },
    image: {
        url: string
    },
    slug: string,
    updatedAt: string,
    article: {
        html: React.ReactNode
    }
    message: "article of Mental Health Resources"
    language: 'en_EN'
}

export interface ALlArticles {
    articles: article[]
}

export interface singleArticle {
    article: article
}