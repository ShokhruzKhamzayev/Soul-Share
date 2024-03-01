'use client'
import Image from "next/image";
import { ContactForm } from "./contactForm";
import contact_content from '../assets/contact-content.png'
import CardSender from "./cardSender";

export default function SenderUI({ isItForEmail }: {
    isItForEmail: boolean
}) {
    return (
        <div className="flex justify-between custom-container pb-[5px]">
            <div className="hidden lg:block w-[50%]">
                <Image src={contact_content} alt="preview contact" className="max-h-[600px] rounded-[25px]" />
            </div>
            <div className="w-full lg:w-[45%] text-center min-h-[80vh] ">
                {
                    isItForEmail ? <ContactForm /> : <CardSender />
                }
            </div>
        </div>
    )
}
