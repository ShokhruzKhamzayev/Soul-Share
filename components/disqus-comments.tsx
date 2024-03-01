'use client'
import { detailedCard } from "@/lib/index.t";
import { DiscussionEmbed } from "disqus-react";

export default function DisqusComment({ card, id }: {
    card: detailedCard
    id: string
}) {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : ''
    const disqussConfig = {
        url: pageUrl,
        identifier: id,
        title: card.message,
        language: 'en_EN'
    }
    return (
        <div id="disqus-wrapper" className="bg-[#F2F3FD] dark:bg-white p-[20px] lg:p-[50px] border-blue-700 md:border-[5px] rounded-[15px] mb-[15px]">
            <div id="disqus_thread">
                <DiscussionEmbed shortname="anonymous-cards-1" config={disqussConfig} />
            </div>
        </div>
    )
}
