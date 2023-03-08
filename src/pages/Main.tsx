import React from "react";
import Layout from "../components/Layout";
import CampingList from "../components/main/CampingList";
import ZoneoutBtn from "../components/main/ZoneoutBtn";

const Main = () => {
    return (
        <Layout>
            <ZoneoutBtn />
            <CampingList />
        </Layout>
    );
}

export default Main;