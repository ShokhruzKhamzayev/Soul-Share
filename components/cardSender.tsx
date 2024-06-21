import { sendingCardData } from "@/lib"
import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import { FaRightLong } from "react-icons/fa6"
import { toast } from "sonner"

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

const schema = z.object({
    message: z.string().min(20)
})

type FormValues = z.infer<typeof schema>


export default function CardSender() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormValues>({
        defaultValues: { message: '' },
        resolver: zodResolver(schema)
    })

    const onSubmit = handleSubmit((data) => {
        getMessage(removeLineBreaks(data.message))
        reset()
    })
    async function getMessage(message: string) {
        const { data } = await axios.post('https://vector.profanity.dev', { message })
        if (data.isProfanity) {
            return toast.error('Do not use flagged words, please!')
        }
        const sendMessage = sendingCardData(message)
        toast.promise(sendMessage, {
            success: 'The message has been sent for review',
            error: 'Something went wrong',
        })
    }

    function removeLineBreaks(inputText: string) {
        return inputText.replace(/(\r\n|\n|\r)/gm, " ");
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col justify-center items-center w-full lg:w-[70%] mx-auto min-h-[80vh] gap-[25px]">
            <textarea {...register("message")} placeholder="Your Message" className="resize-none shadow-lg shadow-[#2F4DE4] w-full min-h-[300px] bg-transparent border-[#2F4DE4] border-[3px] p-[15px] rounded-[20px] dark:border-yellow-200 dark:shadow-yellow-200" />
            {
                errors.message && <p className="font-bold text-red-500">{errors.message.message}</p>
            }
            <span>By sending your card, you will automatically agree with our <Link href={'/privacy'} className="text-blue-500 font-semibold text-xl dark:text-yellow-200">Privacy Terms!</Link></span>
            <button className='flex justify-center items-center gap-[7px] w-[60%] mx-auto dark:bg-yellow-200 py-[10px] rounded-[15px] dark:text-black bg-[#2F4DE4] text-white'>
                Send
                <FaRightLong />
            </button>
            <p className="font-semibold text-[17px]">Your identity will remain a secret!</p>
        </form>
    )
}