import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri"
import { Link } from "react-router-dom";

const Buttons = () => {
    return (
        <>
            <Link to="/">
                <div className="w-[50px] h-[50px] border rounded-[50%] flex justify-center items-center text-[30px] text-white font-bold fixed top-[5%] left-[5%] cursor-pointer hover:bg-white hover:text-black shadow-[0px_0px_10px_white]">
                    <RiArrowGoBackFill />
                </div>
            </Link>
            <audio src="/sound/fire.mp3" autoPlay loop></audio>
        </>
    );
}

export default Buttons;