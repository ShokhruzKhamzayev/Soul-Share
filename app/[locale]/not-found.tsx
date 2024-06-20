'use client'
import Lottie from 'lottie-react'
import React from 'react'
import animation from '../../assets/animation.json'
import Link from 'next/link'
import { BiHome } from 'react-icons/bi'

export default function NotFound() {
    return (
        <>
            <Lottie animationData={animation} className='max-w-[500px] mx-auto' />
            <Link href={'/'} className='flex justify-center items-center gap-[10px] text-[40px] bg-[#2F4DE4] w-fit mx-auto py-[13px] px-[25px] rounded-[15px] text-white'><BiHome /> Home</Link>
        </>
    )
}
