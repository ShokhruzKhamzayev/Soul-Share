import Image from "next/image";
import Link from "next/link";
import logo_light from '../assets/logo.png';
import ThemeSwitcher from "./ThemeSwitcher";
import BurgerMenu from "./burgerMenu";
import NavPhone from "./navPhone";
import TranslationsProvider from "./translationProvider";
import initTranslations from "@/app/i18n";
import LanguageChanger from "./langChanger";

export default async function Header({ locale }: {
    locale: string
}) {
    return (
        <div className="relative">
            <div className="custom-container flex justify-between items-center py-[25px]">
                <div className="logo">
                    <Link href={'/'}>
                        <Image src={logo_light} className="max-w-[200px]" alt="Soulshare" />
                    </Link>
                </div>
                <div className="pages-theme flex items-center gap-[10px] md:gap-[40px]">
                    <nav className="hidden md:flex items-center gap-[42px]">
                        <BurgerMenu locale={locale} />
                    </nav>
                    <ThemeSwitcher />
                    <LanguageChanger />
                    <NavPhone />
                </div>
            </div>
        </div>
    )
}
