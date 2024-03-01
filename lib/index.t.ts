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