import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="custom-container py-[20px] flex justify-between flex-col lg:flex-row gap-[30px] lg:gap-0">
            <section className="w-full lg:w-[47%] text-center">
                <h1 className="text-[30px] md:text-3xl lg:text-5xl text-[#2F4DE4] text-balance mb-[20px]">
                    Policy of Sending Cards
                </h1>
                <h1 className="text-slate-800 dark:text-slate-200 text-xl md:text-2xl lg:text-3xl mb-[10px] font-bold">
                    How to send your card?
                </h1>
                <p className="italic tracking-wider">
                    Just text your <Link href={'/card'} className="text-blue-600">message</Link> and press send. After the administrators will approve your message it will appear on the website’s main page.
                </p>
                <ul className="list-disc list-inside text-left mt-[20px]">
                    <span className="text-red-500 text-2xl">
                        Reminder !
                    </span>
                    <li className="text-[15px] md:text-[17px] tracking-wider my-[20px]">All information about you and your message will stay anonymous. Even the administrators will have no access to the information about the sender.</li>
                    <li className="text-[15px] md:text-[17px] tracking-wider">The content of all the cards is checked by admins and then - if approved - sent to the main page.</li>
                </ul>
            </section>
            <section className="w-full lg:w-[47%] text-center">
                <h1 className="text-[30px] md:text-3xl lg:text-5xl text-[#2F4DE4] text-balance mb-[20px]">
                    Policy of Commenting
                </h1>
                <p>
                    While commenting, you can either register or comment as a guest. You can include your name if you want to, or just write Anonymous in the place of a name while commenting. Comments section is to connect with the author of the stories, give them advices, thank them, and support them.
                </p>
            </section>
        </div>
    )
}
