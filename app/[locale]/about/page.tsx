import Image from 'next/image'
import React from 'react'
import about_content from '../../../assets/about.png'
import { Metadata } from 'next'
import ceo from '../../../assets/director.png'
import programmer from '../../../assets/programmer.png'
import initTranslations from '@/app/i18n'


export default async function AboutUs({ params: { locale } }: {
    params: {
        locale: string
    }
}) {
    const { t } = await initTranslations(locale, ['about'])
    return (
        <div className='custom-container pt-[25px]'>
            <div className='w-full lg:w-[48%] text-center mx-auto border border-[#2F4DE4] p-[15px] md:p-[25px] rounded-[20px] dark:border-yellow-200 shadow-lg shadow-[#2F4DE4] dark:shadow-yellow-200'>
                <span className='text-[16px] font-bold text-[#2F4DE4] dark:text-yellow-200'>{t("h1")}</span>
                <h1 className='text-xl md:text-2xl text-center tracking-wider my-[20px]'>{t("sub")}</h1>
                <p className='tracking-wide font-medium'>{t("p_main")}</p>
            </div>
            <div className='flex justify-between items-center gap-x-[40px] gap-y-[40px] text-center flex-col lg:flex-row my-[40px]'>
                <Image src={about_content} alt='about content' className='w-full md:w-[48%] rounded-[30px] border-[2px] border-[#2F4DE4] dark:border-yellow-200' />
                <div className='w-full flex flex-col gap-[20px]'>
                    <h1 className="text-[25px] md:text-[35px] font-semibold dark:text-yellow-200 text-[#2F4DE4]">{t("h2")}</h1>
                    <p className="text-[18px] leading-loose">{t("p2")}</p>
                    <h1 className="text-[25px] md:text-[35px] font-semibold dark:text-yellow-200 text-[#2F4DE4]">{t("h3")}</h1>
                    <p className="text-[18px] leading-loose">{t("p3")}</p>
                </div>
            </div>
            <div>
                <h1 className='dark:text-yellow-200 text-[#2F4DE4] text-3xl md:text-5xl text-center mb-[25px] mt-[15px] font-bold'>{t("head_auth")}</h1>
                <div className='flex justify-center items-center gap-[20px] md:gap-[30px] flex-col md:flex-row pb-[20px]'>
                    <AboutAuthor src={ceo} jobTitle={t("ceo")} nameAuthor='Rasulov Jamshidbek' />
                    <AboutAuthor src={programmer} jobTitle={t("dev")} nameAuthor='Khamzayev Shokhruzbek' />
                </div>
            </div>
        </div>
    )
}

export const metadata: Metadata = {
    title: 'About Page | Soul Share',
    description: 'About Page of Soul Share, in this page we can introduce ourselves to our users, briefly all about us',
    keywords: ['About us', 'about page', 'about page of Soul Share', 'about Anon', 'about Soul Share'],
    category: 'About Us'
}

function AboutAuthor({ nameAuthor, jobTitle, src }: {
    nameAuthor: string,
    jobTitle: string,
    src: any
}) {
    return (
        <div className='border-[2px] rounded-[12px]  border-[#2F4DE4] dark:border-yellow-200 py-[10px] px-[20px] pb-[10px] shadow-lg shadow-[#2F4DE4] dark:shadow-yellow-200'>
            <Image src={src} alt={`photo of ${nameAuthor}`} className='w-full h-[300px] object-contain lg:h-[400px] rounded-[15px]' />
            <div>
                <h1 className='text-center dark:text-yellow-200 text-[#2F4DE4] text-xl lg:text-3xl my-[25px] font-medium'>{nameAuthor}</h1>
                <p className='text-center text-[17px] font-semibold'>{jobTitle}</p>
            </div>
        </div>
    )
}