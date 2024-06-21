import { GraphQLClient, gql } from 'graphql-request'
import { CardType, article, detailedCard } from './index.t'
import { Hygraph_endpoint } from '@/constants'

export const graphlqlClient = new GraphQLClient(Hygraph_endpoint)

export async function fetchCardWithLang(lang?: string, isAll?: boolean) {
    const query = gql`
        query MyQuery {
            inboxes (orderBy: updatedAt_DESC, where: {${isAll ? `documentInStages_some: {stage: PUBLISHED}` : `language: ${lang}`}} first: 100000000000000000) {
                id
                message
                language
                updatedAt
            }
        }
    `

    const langData = await graphlqlClient.request<{ inboxes: CardType[] }>(query)
    return langData
}

export async function fetchDetailedCard(id: string) {
    const query = gql`
            query MyQuery {
                inbox(where: {id: "${id}"}) {
                    message
                    language
                    updatedAt
                }
            }
    `
    const { inbox } = await graphlqlClient.request<{ inbox: detailedCard }>(query)
    return inbox
}

export async function sendingCardData(message: any) {
    const mutuation = gql`
        mutation MyMutation {
            createInbox(data: {message: "${message}"}) {
                message
            }
        }
    `

    const sendMessage = graphlqlClient.request(mutuation)
    return sendMessage
}

export async function fetchLastCards() {
    const query = gql`
        query MyQuery {
            inboxes(orderBy: updatedAt_DESC, first: 4) {
                id
                message
                language
                updatedAt
            }
        }
    `

    const latestCards = await graphlqlClient.request<{ inboxes: CardType[] }>(query)
    return latestCards
}

export async function fetchArticles() {
    const query = gql`
        query MyQuery {
            articles(orderBy: publishedAt_DESC, first: 100000000000000) {
                title
                excerpt {
                    html
                }
                image {
                url
                }
                slug
                updatedAt
            }
        }
    `

    const articlesData = await graphlqlClient.request<{ articles: article[] }>(query)
    return articlesData
}

export async function fetchDetailedArticle(slug: string) {
    const query = gql`
        query MyQuery {
            article(where: {slug: "${slug}"}) {
                id
                title
                forSource {
                    html
                }
                author {
                name
                avatar {
                    url
                }
                }
                image {
                url
                }
                slug
                updatedAt
                article {
                html
                }
            }
        }
    `

    const detailedArticle = await graphlqlClient.request<{ article: article }>(query)
    return detailedArticle
}

export async function fetchCardWithLangForSitemap() {
    const query = gql`
        query MyQuery {
            inboxes (orderBy: updatedAt_DESC, where: {documentInStages_some: {stage: PUBLISHED}} first: 100000000000000000) {
                id
                updatedAt
            }
        }
    `

    const langData = await graphlqlClient.request<{ inboxes: CardType[] }>(query)
    return langData
}