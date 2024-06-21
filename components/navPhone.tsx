'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BiPhoneCall } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import LanguageChanger from './langChanger'

export default function NavPhone() {
    const [action, setAction] = useState(false)
    const { t } = useTranslation()
    return (
        <>
            <button className="block md:hidden" onClick={() => setAction(true)}>
                <FaBars size={32} />
            </button>
            <div className={`nav-phone block md:hidden ${action ? 'active' : 'disactive'} bg-[#F2F3FD] dark:bg-[#02030D] min-h-screen overflow-hidden`}>
                <button className="closer" onClick={() => setAction(false)}>
                    <IoMdClose size={35} />
                </button>
                <Link href={'/resources'} onClick={() => setAction(false)} className="flex items-center gap-[5px] text-[20px] md:text-[17px]">{t('res')}</Link>
                <Link href={'/about'} onClick={() => setAction(false)} className="text-[20px] md:text-[17px]">{t('about')}
                </Link>
                <Link href={'/contact'} onClick={() => setAction(false)} className="flex items-center gap-[5px] text-[20px] md:text-[17px]">{t('contact')}
                    <BiPhoneCall size={28} />
                </Link>
                <LanguageChanger />
            </div>
        </>
    )
}
