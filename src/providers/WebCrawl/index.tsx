import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../api";
import { InspectionListInterface, NewInspectionInterface, NewInspectionResponseInterface, WebCrawlContextInterface, WebCrawlProviderProps } from "../../interfaces";

export const WebCrawlContext = createContext<WebCrawlContextInterface>({} as WebCrawlContextInterface);

export const WebCrawlProvider = ({children}: WebCrawlProviderProps) => {
    const [inspectionList, setInspectionList] = useState<InspectionListInterface[]>(JSON.parse(localStorage.getItem('@InspectionsList') || '[]'))
    const [isDark, setIsDark] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem('@InspectionsList', JSON.stringify(inspectionList))
    }, [inspectionList])


    const retrieveInspectionById = async (id: string) => {
        api.get(`/${id}`)
            .then(res => {
                const idAlreadyExists = inspectionList.findIndex(el => el.id === id)
                if (idAlreadyExists !== -1) {
                    inspectionList[idAlreadyExists] = res.data
                    const updatedList = [...inspectionList]
                    setInspectionList([])
                    setInspectionList(updatedList)
                    localStorage.setItem('@InspectionsList', JSON.stringify(inspectionList))
                } else {
                    setInspectionList([...inspectionList, res.data])
                }
            })
    }

    const createNewInspection = async (data: NewInspectionInterface) => {
        api.post("", data)
            .then(res => {
                toast.success('Inspeção criada com sucesso!')
                retrieveInspectionById(res.data.id)
                localStorage.setItem('@InspectionsList', JSON.stringify(inspectionList))
            })
            .catch((_) => toast.error('Não foi possível criar a inspeção no momento.'))
    }

    const deleteInspectionById = async (id: string) => {
        const inspectionListFiltered = inspectionList.filter(el => el.id !== id)
        setInspectionList(inspectionListFiltered)
        toast.success('Inspeção removida com sucesso!')
    }

    return (
        <WebCrawlContext.Provider value={{inspectionList, setInspectionList, retrieveInspectionById, createNewInspection, isDark, setIsDark, deleteInspectionById}}>
            {children}
        </WebCrawlContext.Provider>
    )
}

export const useWebCrawl = () => useContext(WebCrawlContext)