import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import ZoneOut from "../pages/ZoneOut";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/zoneout" element={<ZoneOut />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;