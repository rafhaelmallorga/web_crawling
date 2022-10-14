import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../api";
import { InspectionListInterface, NewInspectionInterface, NewInspectionResponseInterface, WebCrawlContextInterface, WebCrawlProviderProps } from "../../interfaces";

export const WebCrawlContext = createContext<WebCrawlContextInterface>({} as WebCrawlContextInterface);

export const WebCrawlProvider = ({children}: WebCrawlProviderProps) => {
    const [inspectionIdList, setInspectionIdList] = useState<NewInspectionResponseInterface[]>([])
    const [inspectionList, setInspectionList] = useState<InspectionListInterface[]>([])
    const [isDark, setIsDark] = useState<boolean>(false)

    const retrieveInspectionById = async (id: string) => {
        api.get(`/${id}`)
            .then(res => {
                setInspectionList([...inspectionList, res.data])
            })
    }

    const createNewInspection = async (data: NewInspectionInterface) => {
        api.post("", data)
            .then(res => {
                setInspectionIdList([...inspectionIdList, res.data])
                toast.success('Inspeção criada com sucesso!')
            })
            .catch((_) => toast.error('Não foi possível criar a inspeção no momento.'))
    }

    return (
        <WebCrawlContext.Provider value={{inspectionIdList, setInspectionIdList, inspectionList, setInspectionList, retrieveInspectionById, createNewInspection, isDark, setIsDark}}>
            {children}
        </WebCrawlContext.Provider>
    )
}

export const useWebCrawl = () => useContext(WebCrawlContext)