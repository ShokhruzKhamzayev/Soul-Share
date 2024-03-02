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

interface article {
    title: string,
    subHeader: string,
    source: string,
    excerpt: {
        html: string
    }
    author: {
        url: string
    },
    image: {
        url: string
    },
    slug: string,
    updatedAt: string,
    article: {
        html: React.ReactNode
    }
}

export interface ALlArticles {
    articles: article[]
}

export interface singleArticle {
    article: article
}