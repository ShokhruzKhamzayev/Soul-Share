'use client'

import { useState } from "react"
import Hero from "./hero"
import Button from "./filterButton"

export default function Options() {
    const [lang, setLang] = useState('')
    const [all, setAll] = useState(true)
    const [itemOffset, setItemOffset] = useState(0);

    return (
        <div>
            <div className="flex items-center gap-[10px] md:gap-[30px] justify-center md:justify-start ">
                <Button setItemOffset={setItemOffset} setLang={setLang} setAll={setAll} allValue={true} value='' data={'All'} />
                <Button setItemOffset={setItemOffset} setLang={setLang} setAll={setAll} allValue={false} value='en' data={'English'} />
                <Button setItemOffset={setItemOffset} setLang={setLang} setAll={setAll} allValue={false} value='ru' data={'Russian'} />
                <Button setItemOffset={setItemOffset} setLang={setLang} setAll={setAll} allValue={false} value='uz' data={'Uzbek'} />
            </div>
            <Hero lang={lang} isAll={all} setItemOffset={setItemOffset} itemOffset={itemOffset} />
        </div>
    )
}
