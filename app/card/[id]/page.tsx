import Date from "@/components/dateShow"
import DisqusComment from "@/components/disqus-comments"
import { fetchDetailedCard, fetchLastCards } from "@/lib"
import Link from "next/link"
import { BiChevronLeft, BiChevronRight, BiUser } from "react-icons/bi"

export default async function DetailedCard({ params: { id } }: {
    params: { id: string }
}) {
    const inbox = await fetchDetailedCard(id)
    const { inboxes } = await fetchLastCards()
    return (
        <div className="custom-container flex justify-between">
            <div className="w-full lg:w-[63%]">
                <div className="author flex items-center gap-[13px] justify-center">
                    <div className="avatar bg-[#D9D9D9] p-[10px] rounded-[50%]">
                        <BiUser color="black" />
                    </div>
                    <span>user{id.slice(10)}</span>
                </div>
                <div className="content bg-[#2F4DE4] p-[20px] w-full rounded-[12px] mt-[20px] text-[17px]">
                    <p className="text-gray-200">{inbox.message}</p>
                    <p className='text-gray-200 text-[17px] mt-[20px] text-right'>
                        <Date dateString={inbox.updatedAt} />
                    </p>
                </div>
                <div className="mt-[25px]">
                    <Link href={'/'} className="flex items-center gap-[7px] justify-center underline hover:dark:text-yellow-200 hover:text-[#2F4DE4] w-fit mx-auto transition-all duration-300">
                        <BiChevronLeft size={32} />
                        Back to Main Page
                    </Link>
                </div>
                <div className="text-center my-[30px] text-balance">
                    <h3>Do you wanna see your card there? <Link href={'/card-sender'} className="text-[#2F4DE4] dark:text-yellow-200 text-xl font-semibold"> Just click it</Link></h3>
                </div>
                <DisqusComment card={inbox} id={id} />
            </div>
            <div>
                <div className="w-[2px] h-[100%] bg-[#040720] dark:bg-[#DFE2FB] hidden lg:block"></div>
            </div>
            <div className="hidden lg:block w-[33%]">
                <p className="text-xl text-center dark:text-yellow-200 text-blue-700 font-semibold">Latest Cards</p>
                <div className="grid grid-cols-1 gap-y-[13px] py-[13px]">
                    {
                        inboxes.map((card, index) => (
                            <Link href={{
                                pathname: `./${card.id}`,
                                query: {
                                    id: card.id
                                }
                            }} className="flex flex-col gap-[20px] bg-[#2F4DE4] px-[20px] py-[10px] rounded-[17px] text-white justify-between" key={index} >
                                <div className="author flex items-center gap-[13px]">
                                    <div className="avatar bg-[#D9D9D9] p-[10px] rounded-[50%]">
                                        <BiUser color="black" />
                                    </div>
                                    <span>user{card.id.slice(10)}</span>
                                </div>
                                <div className="content">
                                    <p className="line-clamp-5 text-[18px] text-gray-200">{card.message}</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-gray-200 text-[14px] '>
                                        <Date dateString={card.updatedAt} /></p>
                                    <span className="flex items-center justify-end ">Read More <BiChevronRight size={35} /></span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
