import { useState, useEffect } from "react";
import axios from "axios";

interface InfoTpye {
    contentId: string
    facltNm: string
    addr1: string
    firstImageUrl: string
    tel: string
    homepage: string
    induty: string
}

export const useAxios = (baseUrl:string, searchType:string) => {
    const [campingInfo, setCampingInfo] = useState<InfoTpye[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const dataAPI = async (tpye:string) => {
        setIsLoading(true);
        try {
                const res = await axios.get(baseUrl + tpye, {
                    params: {
                        serviceKey: process.env.REACT_APP_SERVICE_KEY,
                        numOfRows: 3000,
                        MobileOS: "WIN",
                        MobileApp: "d",
                        _type: "json"
                    }
                })
                setCampingInfo(res.data.response.body.items.item)
                setIsLoading(false);
            } catch (err) {
                return err;
            }
        }
        
    useEffect(() => {
        dataAPI(searchType);
    }, [])

    return { campingInfo, isLoading }
}