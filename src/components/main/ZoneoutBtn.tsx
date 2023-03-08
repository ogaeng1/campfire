import React from "react";
import { Link } from "react-router-dom";
import { BsFire } from "react-icons/bs";

const ZoneoutBtn = () => {
    return (
        <Link to="/zoneout">
            <div className="main-lg-btn w-[40px] h-[200px] flex flex-col text-center justify-center items-center text-[20px] right-[5px] bottom-[40%]">
                <BsFire /> 불멍때리기
            </div>
        </Link>
    );
}

export default ZoneoutBtn;