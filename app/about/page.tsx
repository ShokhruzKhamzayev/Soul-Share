import Image from 'next/image'
import React from 'react'
import about_content from '../../assets/aboutContent.png'
import { Metadata } from 'next'
export default function AboutUs() {
    return (
        <div className='custom-container pt-[25px]'>
            <AboutPreview reversed={false} data='We all carry unseen weights: secrets, confessions, and thoughts too heavy to bear alone. Sharing feels risky, vulnerability exposes us. But bottling things up hurts. Here, in this anonymous sanctuary, you can confess freely, with no judgment, no names.' subheader='Unburden your soul, share anonymously.' />
            <AboutPreview reversed={true} data='Release your story. Connect with others through shared experiences, unburdened by the weight of identity. Find understanding, empathy, and perhaps even a sense of belonging among strangers who truly hear you.
Confess. Read. Connect.
' subheader='Let go of burdens' />
            <div className='flex justify-between flex-col-reverse lg:flex-row mt-[20px] md:mt-[30px] lg:mt-[50px] mb-[20px]'>
                <div className='w-full lg:w-[48%] text-center'>
                    <span className='text-[16px] font-bold text-[#2F4DE4] dark:text-yellow-200'>
                        Importance of mental health:
                    </span>
                    <h2 className='text-xl md:text-2xl text-center tracking-wider my-[20px]'>
                        Here is what the National Institute of Health says in its article: <a href="https://nih.gov" className='text-blue-600 font-bold  dark:text-yellow-200'>MENTAL HEALTH MATTERS - PMC</a>
                    </h2>
                    <p className='tracking-wide font-medium'>Unlocking the Vault: Why Sharing Your Mental Health Matters
                        Our minds are intricate landscapes, brimming with emotions, thoughts, and experiences. Yet, just like a vault overflowing with treasures, keeping everything locked away can have detrimental consequences. Just as physical health thrives on care and attention, so too does our mental well-being. Here's why sharing your thoughts and concerns is vital for unlocking a happier, healthier you:
                        1. Strength in Vulnerability: Sharing your struggles isn't a sign of weakness; it's a courageous act of self-compassion. Talking openly allows others to offer support, understanding, and even shared experiences, reminding you that you're not alone. Bottling up emotions, on the other hand, fuels isolation and amplifies negativity.
                        2. A Clearer Lens: Sometimes, our own thoughts can become muddled and distorted. Sharing them with a trusted friend, therapist, or support group allows you to gain a fresh perspective and see things through a different lens. This external viewpoint can offer valuable insights and help you navigate challenges more effectively.
                        3. Breaking the Stigma: Talking openly about mental health challenges normalizes these experiences and combats the harmful stigma that often surrounds them. Your bravery can inspire others to seek help and create a more understanding and supportive community.
                        4. Early Intervention is Key: Ignoring mental health concerns can lead to them worsening over time. Sharing your struggles early allows for timely intervention, whether it's through therapy, medication, or lifestyle changes. Addressing issues early often leads to better outcomes and prevents them from impacting other areas of your life.
                        5. Building Resilience: Life throws curveballs, and sharing your challenges helps you build the emotional resilience to handle them. By processing your experiences with others, you develop coping mechanisms, learn healthy communication skills, and become better equipped to face future difficulties.
                        Remember, mental health is just as important as physical health. Don't let your thoughts and concerns become a heavy burden. Unlock the vault, share your story, and embrace the strength and support that awaits you on the other side.</p>
                </div>
                <div className='w-full lg:w-[48%] text-center'>
                    <span className='text-[16px] font-bold text-[#2F4DE4] dark:text-yellow-200'>Why? (Creation and purpose)</span>
                    <h1 className='text-xl md:text-2xl text-center tracking-wider my-[20px]'>The Idea and Purpose</h1>
                    <p className='tracking-wide font-medium'>&quot;As an overthinker, I think about any thought for hours, leading me to depression or more. I am very curious and want to know every detailed information as I get interested. Thus, I listen to people a lot but never trust others when it comes to sharing my own thoughts. One day, again sitting and thinking about my private overthinking thoughts, I realized that I keep too much in me, so I started searching for online places where I could share my &quot;things&quot; with strangers I would never see again. However, I could find no place for my exact purpose - to confess my feelings to strangers. At that moment, I thought that there were definitely some people who felt the same way as me, and they needed - we need - a place where we could freely express our private, untrusted-to acquaintances, and harm our mental health thoughts. Keeping too much harms our mental/psychological state, and pouring things out would heal us. Ultimately, I decided to create this project where you can share your thoughts that keep torturing your mind anonymously, along with reading other people's confessions. No one knows anyone – Share your soul, learn from the experiences of others, help, get help, and free your soul to keep your mental health good.&quot;</p>
                </div>
            </div>
        </div>
    )
}

export const metadata: Metadata = {
    title: 'About Page | Anonymous Cards',
    description: 'About Page of anonymous cards, in this page we can introduce ourselves to our users, briefly all about us',
    keywords: ['About us', 'about page', 'about page of Anonymous Cards', 'about Anon', 'about anonymous cards'],
    category: 'About Us'
}

function AboutPreview({ reversed, data, subheader }: {
    reversed: boolean,
    data: string,
    subheader: string
}) {
    return (
        <div className={`flex justify-between flex-col items-center ${reversed ? 'lg:flex-row-reverse mt-[60px]' : 'lg:flex-row'} text-center lg:text-start gap-[25px] lg:gap-0`}>
            <Image src={about_content} alt='about content' className='w-full md:w-[50%]' />
            <div className='w-full lg:w-[45%] flex flex-col gap-[20px]'>
                <h1 className="text-[25px] md:text-[35px] font-semibold ">Soul Share</h1>
                <span className="text-[16px] dark:text-yellow-200 text-[#2F4DE4]">{subheader}</span>
                <p className="text-[18px] leading-loose">{data}</p>
            </div>
        </div>
    )
}