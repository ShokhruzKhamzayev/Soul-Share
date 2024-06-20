import initTranslations from "@/app/i18n";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";

export default function BurgerMenu({ setAction, locale }: {
    setAction: Function,
    locale: string
}) {
    return (
        <>
            <Link href={'/resources'} onClick={() => setAction(false)} className="flex items-center gap-[5px] text-[20px] md:text-[17px]">Mental Health Resources</Link>
            <Link href={'/about'} onClick={() => setAction(false)} className="text-[20px] md:text-[17px]">About Us
            </Link>
            <Link href={'/contact'} onClick={() => setAction(false)} className="flex items-center gap-[5px] text-[20px] md:text-[17px]">Contact Us
                <BiPhoneCall size={28} />
            </Link>
        </>
    )
}
