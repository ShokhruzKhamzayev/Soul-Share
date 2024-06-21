import initTranslations from "@/app/i18n";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";

export default async function BurgerMenu({ locale }: {
    locale: string
}) {
    const { t } = await initTranslations(locale, ['nav'])
    return (
        <>
            <Link href={'/resources'} className="flex items-center gap-[5px] text-[20px] md:text-[17px]">{t('res')}</Link>
            <Link href={'/about'} className="text-[20px] md:text-[17px]">{t('about')}
            </Link>
            <Link href={'/contact'} className="flex items-center gap-[5px] text-[20px] md:text-[17px]">{t('contact')}
                <BiPhoneCall size={28} />
            </Link>
        </>
    )
}
