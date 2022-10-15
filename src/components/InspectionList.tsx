import React from 'react'
import { useWebCrawl } from '../providers/WebCrawl'
import InspectionItemList from './InspectionItemList'

const InspectionList = () => {
    const {isDark, setIsDark, inspectionList} = useWebCrawl()

    return (
        <div className={`w-full max-w-[1000px] h-[60%] my-4 ${isDark ? 'bg-backDark' : 'bg-back'} rounded-md shadow transition ease-in duration-500 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded  ${isDark ? 'scrollbar-track-back2Dark' : 'scrollbar-track-slate-200'} scrollbar-thumb-logo`}>
            <h3 className={`h-[50px] flex items-center pl-10 font-semibold ${isDark ? 'text-labelDark border-borderDark' : 'text-label border-border'} border-b-[1px] transition ease-in duration-500`}>Inspeções Cadastradas</h3>
            <ul className='w-full h-full'>
                {inspectionList?.map(el => <InspectionItemList key={el.id} inspection={el}/>)}
            </ul>
        </div>
    )
}

export default InspectionList