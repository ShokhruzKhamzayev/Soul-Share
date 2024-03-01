import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";

export default function BurgerMenu({ setAction }: {
    setAction: Function
}) {
    return (
        <>
            <Link href={'/about'} onClick={() => setAction(false)} className="text-[20px] md:text-[17px]">About Us
            </Link>
            <Link href={'/contact'} onClick={() => setAction(false)} className="flex items-center gap-[5px] text-[20px] md:text-[17px]">Contact Us
                <BiPhoneCall size={28} />
            </Link>
        </>
    )
}
