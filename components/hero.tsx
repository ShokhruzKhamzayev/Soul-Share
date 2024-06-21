import initTranslations from "@/app/i18n";
import Image from "next/image";
import Link from "next/link";
import hero_content from '../assets/main.png';

type PageProps = {
    locale: string,
}

export default async function Hero({ locale }: PageProps) {
    const { t } = await initTranslations(locale, ['main'])
    return (
        <div>
            <div className="flex justify-between items-center flex-col lg:flex-row mt-[50px] gap-[20px] lg:gap-0">
                <Image src={hero_content} alt="content hero" className="w-full lg:w-[48%] rounded-[20px] border-[2px] border-[#2F4DE4] dark:border-yellow-200" priority={true} />
                <div className="w-full lg:w-[48%] flex flex-col gap-[15px] text-center lg:text-left">
                    <h1 className="text-[25px] md:text-[35px] font-semibold ">Soul Share</h1>
                    <span className="text-[16px] dark:text-yellow-200 text-[#2F4DE4]">{t('main:sub')}</span>
                    <p className="text-[18px] leading-loose">
                        {t('main:p')}
                    </p>
                    <Link href={'/card-sender'} className="mt-[15px] bg-[#2F4DE4] w-fit py-[10px] px-[25px] rounded-[12px] text-white mx-auto lg:mx-0">{t("main:btn")}</Link>
                </div>
            </div>
        </div >
    )
}
