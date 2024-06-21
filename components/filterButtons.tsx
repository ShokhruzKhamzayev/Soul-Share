'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FilterButtons() {
    const router = useRouter()
    const { t } = useTranslation()
    function toLink(endPoint: string) {
        router.push(`?lang=${endPoint}`)
    }
    return (
        <div className="flex items-center gap-[10px] md:gap-[30px] justify-center md:justify-start ">
            <button className="bg-[#2F4DE4] text-[20px] md:text-[24px] hover:bg-[#343f74] py-[5px] px-[10px] md:px-[25px] rounded-[12px] flex-wrap text-white transition-all duration-300" onClick={() => toLink('all')}>{t("buttons:all")}</button>
            <button className="bg-[#2F4DE4] text-[20px] md:text-[24px] hover:bg-[#343f74] py-[5px] px-[10px] md:px-[25px] rounded-[12px] flex-wrap text-white transition-all duration-300" onClick={() => toLink('en')}>{t("buttons:en")}</button>
            <button className="bg-[#2F4DE4] text-[20px] md:text-[24px] hover:bg-[#343f74] py-[5px] px-[10px] md:px-[25px] rounded-[12px] flex-wrap text-white transition-all duration-300" onClick={() => toLink('ru')}>{t("buttons:ru")}</button>
            <button className="bg-[#2F4DE4] text-[20px] md:text-[24px] hover:bg-[#343f74] py-[5px] px-[10px] md:px-[25px] rounded-[12px] flex-wrap text-white transition-all duration-300" onClick={() => toLink('uz')}>{t("buttons:uz")}</button>
        </div>
    )
}
