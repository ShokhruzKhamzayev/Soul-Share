'use client'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { FaRightLong } from 'react-icons/fa6';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_043q7dp', 'template_pgdbhll', form.current, {
                publicKey: 'MWtPeg1frV0JZ8F2t',
            })
            .then(
                () => {
                    toast.success('Message has been sent')
                },
                (error) => {
                    toast.success('Message Failed', error)
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center max-w-[500px] mx-auto gap-[25px] min-h-[80vh] lg:min-h-0'>
            <label className='flex flex-col gap-[10px] items-start w-full'>
                <span className='text-md font-semibold pl-[5px]'>Name*</span>
                <input type="text" name="from_name" className='w-full bg-transparent outline-none border-[3px] border-[#D9D9D9] rounded-[15px] py-[5px] px-[15px]' required />
            </label>
            <label className='flex flex-col gap-[10px] items-start w-full'>
                <span className='text-md font-semibold pl-[5px]'>Email*</span>
                <input type="email" name="from_email" className='w-full bg-transparent outline-none border-[3px] border-[#D9D9D9] rounded-[15px] py-[5px] px-[15px]' required />
            </label>
            <label className='flex flex-col gap-[10px] items-start w-full'>
                <span className='text-md font-semibold pl-[5px]'>Message*</span>
                <textarea name="message" className='w-full bg-transparent outline-none border-[3px] border-[#D9D9D9] rounded-[15px] py-[5px] px-[15px] min-h-[200px]' required />
            </label>
            <button className='flex justify-center items-center gap-[7px] w-[60%] mx-auto dark:bg-yellow-200 py-[10px] rounded-[15px] dark:text-black bg-[#2F4DE4] text-white'>
                Send
                <FaRightLong />
            </button>
        </form>
    );
};