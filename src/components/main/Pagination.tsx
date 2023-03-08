import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

interface PaginationType {
    total: number
    limit: number
    page: number
    setPage: number | any
}

const Pagination = ({ total, limit, page, setPage }:PaginationType) => {
    const pageNum = Math.ceil(total / limit);
    const showPage = new Array(pageNum).fill(0)

    return (
        <nav className="flex gap-5 items-center w-full h-full overflow-x-auto">
            <button onClick={() => setPage(page - 1)} disabled={page === 1} className="w-[20px] h-[20px] border flex justify-center items-center">
                {page === 1 ? <GrFormPrevious className=" opacity-40"/> : <GrFormPrevious />}
            </button>
            <div className="w-full h-[45px] flex overflow-auto gap-10">
                {showPage.map((_, idx) => (
                    page === idx + 1 ? 
                        <button key={idx+1} onClick={() => setPage(idx + 1)} className="w-[30px] h-[20px] text-[blue] font-bold">
                            {idx + 1}
                        </button> :
                        <button key={idx+1} onClick={() => setPage(idx + 1)} className="w-[30px] h-[20px]">
                            {idx + 1}
                        </button>
                ))}
            </div>
            <button onClick={() => setPage(page + 1)} disabled={page === pageNum} className="w-[20px] h-[20px] border flex justify-center items-center">
                {page === pageNum ? <GrFormNext className=" opacity-40"/> : <GrFormNext />}
            </button>
        </nav>
    )
}

export default Pagination;