'use client'

import Image from "next/image"
import { useState } from "react"

export default function CustomImage({ src, alt }: {
    src: string,
    alt: string
}) {
    const [loading, setLoading] = useState(true)
    return (
        <Image src={src} alt={alt} className={`overflow-hidden object-contain transition-all duration-300 ${loading ? "blur-2xl scale-110" : "blur-0 scale-100"}`} fill onLoad={() => setLoading(false)} />
    )
}
