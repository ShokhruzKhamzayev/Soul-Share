'use client'
import Image from "next/image";
import { ContactForm } from "./contactForm";
import contact_content from '../assets/contact.png'
import sender_content from '../assets/send-card.png'
import CardSender from "./cardSender";

export default function SenderUI({ isItForEmail }: {
    isItForEmail: boolean
}) {
    return (
        <div className="flex justify-between custom-container items-center pb-[5px] mt-[25px]">
            <div className="hidden lg:block w-[50%]">

                <Image src={
                    isItForEmail ? contact_content : sender_content
                } alt="preview contact" className="max-h-[600px] rounded-[25px] border-[3px]" />
            </div>
            <div className="w-full lg:w-[45%] text-center min-h-[80vh] lg:min-h-0 ">
                {
                    isItForEmail ? <ContactForm /> : <CardSender />
                }
            </div>
        </div>
    )
}
