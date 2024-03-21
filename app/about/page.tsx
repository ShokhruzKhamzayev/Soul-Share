import Image from 'next/image'
import React from 'react'
import about_content from '../../assets/about.png'
import { Metadata } from 'next'
import ceo from '../../assets/director.png'
import programmer from '../../assets/programmer.png'


export default function AboutUs() {
    return (
        <div className='custom-container pt-[25px]'>
            <div className='w-full lg:w-[48%] text-center mx-auto border border-[#2F4DE4] p-[15px] md:p-[25px] rounded-[20px] dark:border-yellow-200 shadow-lg shadow-[#2F4DE4] dark:shadow-yellow-200'>
                <span className='text-[16px] font-bold text-[#2F4DE4] dark:text-yellow-200'>Why? (Creation and purpose)</span>
                <h1 className='text-xl md:text-2xl text-center tracking-wider my-[20px]'>The Idea and Purpose</h1>
                <p className='tracking-wide font-medium'>&quot;As an overthinker, I think about any thought for hours, leading me to depression or more. I am very curious and want to know every detailed information as I get interested. Thus, I listen to people a lot but never trust others when it comes to sharing my own thoughts. One day, again sitting and thinking about my private overthinking thoughts, I realized that I keep too much in me, so I started searching for online places where I could share my &quot;things&quot; with strangers I would never see again. However, I could find no place for my exact purpose - to confess my feelings to strangers. At that moment, I thought that there were definitely some people who felt the same way as me, and they needed - we need - a place where we could freely express our private, untrusted-to acquaintances, and harm our mental health thoughts. Keeping too much harms our mental/psychological state, and pouring things out would heal us. Ultimately, I decided to create this project where you can share your thoughts that keep torturing your mind anonymously, along with reading other people's confessions. No one knows anyone – Share your soul, learn from the experiences of others, help, get help, and free your soul to keep your mental health good.&quot;</p>
            </div>
            <div className='flex justify-between items-center gap-x-[40px] gap-y-[40px] text-center flex-col lg:flex-row my-[40px]'>
                <Image src={about_content} alt='about content' className='w-full md:w-[48%] rounded-[30px] border-[2px] border-[#2F4DE4] dark:border-yellow-200' />
                <div className='w-full flex flex-col gap-[20px]'>
                    <h1 className="text-[25px] md:text-[35px] font-semibold dark:text-yellow-200 text-[#2F4DE4]">Unburden your soul, share anonymously.</h1>
                    <p className="text-[18px] leading-loose">We all carry unseen weights: secrets, confessions, and thoughts too heavy to bear alone. Sharing feels risky, vulnerability exposes us. But bottling things up hurts. Here, in this anonymous sanctuary, you can confess freely, with no judgment, no names.</p>
                    <h1 className="text-[25px] md:text-[35px] font-semibold dark:text-yellow-200 text-[#2F4DE4]">Let go of burdens
                    </h1>
                    <p className="text-[18px] leading-loose">Release your story. Connect with others through shared experiences, unburdened by the weight of identity. Find understanding, empathy, and perhaps even a sense of belonging among strangers who truly hear you. Confess. Read. Connect</p>
                </div>
            </div>
            <div>
                <h1 className='dark:text-yellow-200 text-[#2F4DE4] text-3xl md:text-5xl text-center mb-[25px] mt-[15px] font-bold'>Authors</h1>
                <div className='flex justify-center items-center gap-[20px] md:gap-[30px] flex-col md:flex-row pb-[20px]'>
                    <AboutAuthor src={ceo} jobTitle='Founder, CEO' nameAuthor='Rasulov Jamshidbek' />
                    <AboutAuthor src={programmer} jobTitle='Web Designer & Developer' nameAuthor='Khamzayev Shokhruzbek' />
                </div>
            </div>
        </div>
    )
}

export const metadata: Metadata = {
    title: 'About Page | Soul Share',
    description: 'About Page of Soul Share, in this page we can introduce ourselves to our users, briefly all about us',
    keywords: ['About us', 'about page', 'about page of Soul Share', 'about Anon', 'about Soul Share'],
    category: 'About Us'
}

function AboutAuthor({ nameAuthor, jobTitle, src }: {
    nameAuthor: string,
    jobTitle: string,
    src: any
}) {
    return (
        <div className='border-[2px] rounded-[12px]  border-[#2F4DE4] dark:border-yellow-200 py-[10px] px-[20px] pb-[10px] shadow-lg shadow-[#2F4DE4] dark:shadow-yellow-200'>
            <Image src={src} alt={`photo of ${nameAuthor}`} className='w-full h-[300px] object-contain lg:h-[400px] rounded-[15px]' />
            <div>
                <h1 className='text-center dark:text-yellow-200 text-[#2F4DE4] text-xl lg:text-3xl my-[25px] font-medium'>{nameAuthor}</h1>
                <p className='text-center text-[17px] font-semibold'>{jobTitle}</p>
            </div>
        </div>
    )
}