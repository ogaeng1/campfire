import { FaSpinner } from "react-icons/fa";

const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center animate-spinner">
            <FaSpinner className="w-[50px] h-[50px]" />
        </div>
    );
}

export default Loading;