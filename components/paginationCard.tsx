'use client'
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Link from "next/link"
import { BiChevronRight, BiUser } from "react-icons/bi"
import Date from './dateShow';
import { CardType } from '@/lib/index.t';

export default function PaginationCard({ data, lang }: {
    data: CardType[],
    lang: string
}) {
    const [itemOffset, setItemOffset] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [currentItems, setCurrentItems] = useState<CardType[]>([])
    const itemsPerPage = 9

    useEffect(() => {
        setItemOffset(0)
    }, [lang])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemsPerPage, itemOffset, data])

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset)
    };
    return (
        <>
            <div className="card-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[10px] my-[40px] gap-y-[20px] 2xl:gap-x-[30px]">
                {
                    currentItems.map((card) => (
                        <Link href={`/card/${card.id}`} className="flex flex-col gap-[20px] bg-[#2F4DE4] px-[20px] py-[10px] rounded-[17px] text-white justify-between" key={card.id} >
                            <div className="author flex items-center justify-center gap-[13px]">
                                <div className="avatar bg-[#D9D9D9] p-[10px] rounded-[50%]">
                                    <BiUser color="black" />
                                </div>
                                <span>user{card.id.slice(17)}</span>
                            </div>
                            <div className="content">
                                <p className="line-clamp-5 text-[18px] text-gray-200">{card.message}</p>
                            </div>
                            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                                <p className='text-gray-300 text-[14px] md:text-[15px] lg:text-[17px] text-left'>
                                    <Date dateString={card.updatedAt} /></p>
                                <span className="flex items-center justify-end">Read More <BiChevronRight size={35} /></span>
                            </div>
                        </Link>
                    ))
                }
            </div>
            {
                pageCount < 2 ? '' :
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName='pagination'
                        pageLinkClassName='page-num'
                        previousLinkClassName='page-num'
                        nextLinkClassName='page-num'
                        activeLinkClassName='active-num'
                    />
            }
        </>
    )
}
