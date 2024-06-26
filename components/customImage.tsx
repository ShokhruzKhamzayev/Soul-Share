'use client'

import Image, { StaticImageData } from "next/image"
import { useState } from "react"

export default function CustomImage({ src, alt }: {
    src: any,
    alt: string
}) {
    const [loading, setLoading] = useState(true)
    return (
        <Image src={src} alt={alt} className={`overflow-hidden w-full object-cover rounded-[12px] transition-all duration-300 ${loading ? "blur-2xl scale-110" : "blur-0 scale-100"}`} fill onLoad={() => setLoading(false)} />
    )
}
