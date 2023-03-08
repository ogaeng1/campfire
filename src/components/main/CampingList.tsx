import { useState, useRef } from "react";
import { useAxios } from "../../hooks/useAxios";
import Loading from "../Loading";
import Pagination from "./Pagination";

const baseUrl = "https://apis.data.go.kr/B551011/GoCamping/";

const CampingList = () => {
    const { campingInfo, isLoading } = useAxios(baseUrl, "basedList");
    const [limit, setLimit] = useState<number>(20);  //페이지 당 데이터 갯수
    const [page, setPage] = useState<number>(1); // 현재 페이지 번호
    const offset = (page - 1) * limit;

    return (
        <div className="w-full h-screen flex flex-col items-center">
            <div className="main-lg-responsive">
                {isLoading ? <Loading /> :
                    campingInfo.slice(offset, offset+limit).map((el) => (
                        <a key={el.contentId} href={el.homepage} target="_blank" className="main-lg-contents" rel="noreferrer noopener">
                            <img src={el.firstImageUrl} alt="이미지 준비중" className="rounded-[10px] w-full h-[200px]" />
                            <p className="w-full h-[100px] flex flex-col justify-center text-center">
                                <span>{el.facltNm}</span>
                                <span className="text-[12px]">{el.addr1}</span>
                                <span>{el.tel}</span>
                                <span className="text-[violet]">{el.induty}</span>
                            </p>
                        </a>
                    ))
                }
            </div>
            <footer className="main-lg-footer">
                {campingInfo && 
                    <Pagination
                        total={campingInfo.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                }
            </footer>
        </div>
    )
}

export default CampingList;