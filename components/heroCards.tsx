import React from 'react'
import EmptyAnim from './emptyBox'
import PaginationCard from './paginationCard'
import { fetchCardWithLang } from '@/lib'
import { CardType } from '@/lib/index.t'

export default async function HeroCards({ lang, r }: {
    lang: string,
    r: number
}) {
    async function getNeededCard(): Promise<CardType[]> {
        if (lang === 'all' || lang === undefined) {
            const { inboxes } = await fetchCardWithLang(lang, true)
            return inboxes
        } else {
            const { inboxes } = await fetchCardWithLang(lang, false)
            return inboxes
        }
    }
    const inboxes = await getNeededCard()
    return (
        <div>
            {
                inboxes.length < 1 ?
                    <EmptyAnim /> :
                    <PaginationCard data={inboxes} lang={lang} />
            }
        </div>
    )
}
