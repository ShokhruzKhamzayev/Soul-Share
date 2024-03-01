import { Metadata } from "next";
import SenderUI from "@/components/senderUI";

export const metadata: Metadata = {
    title: 'Contact Us | Anonymous cards',
    keywords: ['Contact Us', 'Form', 'Contact to Anonymous cards', 'contact anonymous cards', 'contact to admin'],
    category: 'Contact',
    description: 'Contact page, in this page we can know about our clients approach to our website'
}

export default function ContactUs() {
    return (
        <>
            <SenderUI isItForEmail={true} />
        </>
    )
}
