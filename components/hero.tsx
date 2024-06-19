'use client'
import Image from "next/image";
import hero_content from '../assets/main.png'
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchCardWithLang } from "@/lib";
import Loader from "./loader";
import { CardType } from "@/lib/index.t";
import EmptyAnim from "./emptyBox";
import PaginationCard from "./paginationCard";
import CustomImage from "./customImage";

export default function Hero({ lang, isAll, setItemOffset, itemOffset }: {
    lang: string,
    isAll: boolean,
    setItemOffset: any,
    itemOffset: number
}) {
    const [cards, setCards] = useState<CardType[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getLangData()
        setLoading(false)
    }, [lang])
    async function getLangData() {
        const { inboxes } = await fetchCardWithLang(`${lang}`, isAll)
        setCards(inboxes)
    }
    const heroData = {
        uz: "Soul Share - bu sizning e'tiroflaringiz, fikrlaringiz va maxfiy hikoyalaringizni notanish odamlar bilan kartalar orqali baham ko'rish uchun interaktiv veb-sayt. Siz boshqalarning hikoyalarini o'qishingiz va o'zingizni ochmasdan turib, odamlarga shaxsan aytib bera olmaydigan o'z fikrlaringiz bilan bo'lishishingiz mumkin. Ushbu loyihaning yaratilishi va maqsadlari haqida Biz Haqimizda sahifasida ko'proq bilib olishingiz mumkin.",
        ru: "Soul Share — это интерактивный веб-сайт, на котором можно анонимно делиться своими признаниями, мыслями и секретными историями с незнакомцами с помощью карточек. Вы можете читать истории других людей и делиться своими мыслями, которые вы не можете рассказать людям лично, не раскрыв себя. Подробнее о создании и целях этого проекта вы можете узнать на странице «О нас».",
        en: "Soul Share is an interactive website to share your confessions, thoughts, and secret stories anonymously with strangers through cards. You can read other people's stories and share your own thoughts that you can not tell people in person without uncovering yourself. You can learn more about the creation and purposes of this project on the About Us page."
    }

    function Changer() {
        if (lang === "en") {
            return heroData.en
        } else if (lang === "ru") {
            return heroData.ru
        } else if (lang === "uz") {
            return heroData.uz
        } else {
            return heroData.en
        }
    }
    return (
        <div>
            {
                loading ? (<Loader />) : (
                    <>
                        <div className="flex justify-between items-center flex-col lg:flex-row mt-[50px] gap-[20px] lg:gap-0">
                            <Image src={hero_content} alt="content hero" className="w-full lg:w-[48%] rounded-[20px] border-[2px] border-[#2F4DE4] dark:border-yellow-200" priority={true} />
                            <div className="w-full lg:w-[48%] flex flex-col gap-[15px] text-center lg:text-left">
                                <h1 className="text-[25px] md:text-[35px] font-semibold ">Soul Share</h1>
                                <span className="text-[16px] dark:text-yellow-200 text-[#2F4DE4]">Non-profit organization</span>
                                <p className="text-[18px] leading-loose">
                                    <Changer />
                                </p>
                                <Link href={'/card-sender'} className="mt-[15px] bg-[#2F4DE4] w-fit py-[10px] px-[25px] rounded-[12px] text-white mx-auto lg:mx-0">Send your Card</Link>
                            </div>
                        </div>

                        {
                            cards.length < 1 ?
                                <EmptyAnim /> :
                                <PaginationCard data={cards} setItemOffset={setItemOffset} itemOffset={itemOffset} />
                        }
                    </>
                )
            }
        </div >
    )
}
