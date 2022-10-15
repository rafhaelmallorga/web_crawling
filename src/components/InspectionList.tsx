import React from 'react'
import { useWebCrawl } from '../providers/WebCrawl'
import InspectionItemList from './InspectionItemList'

const InspectionList = () => {
    const {isDark, setIsDark, inspectionList} = useWebCrawl()

    return (
        <div className={`w-full max-w-[1000px] ${inspectionList.length > 0 ? `h-[60%] scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded  ${isDark ? 'scrollbar-track-back2Dark' : 'scrollbar-track-slate-200'} scrollbar-thumb-logo` : 'h-[300px] ss:h-[60%]'} my-4 ${isDark ? 'bg-backDark' : 'bg-back'} rounded-md shadow transition ease-in duration-500 `}>
            <h3 className={`h-[50px] flex items-center pl-10 font-semibold ${isDark ? 'text-labelDark border-borderDark' : 'text-label border-border'} border-b-[1px] transition ease-in duration-500`}>Inspeções Cadastradas</h3>
            <ul className={`w-full h-full ${inspectionList.length < 1 && 'flex justify-center items-center' }`}>
                {
                    inspectionList.length > 0 ?
                    inspectionList?.map(el => <InspectionItemList key={el.id} inspection={el}/>)
                    :
                    <div className={`text-labelDark`}>
                        Nenhuma inspeção cadastrada ainda...
                    </div>
                }
            </ul>
        </div>
    )
}

export default InspectionList