import React from 'react'
import { useWebCrawl } from '../providers/WebCrawl'
import InspectionItemList from './InspectionItemList'

const InspectionList = () => {
    const {isDark, setIsDark} = useWebCrawl()

    return (
        <div className={`w-full max-w-[1000px] h-[60%] my-4 ${isDark ? 'bg-backDark' : 'bg-back'} rounded-md shadow`}>
            <h3 className={`h-[50px] flex items-center pl-10 font-semibold ${isDark ? 'text-labelDark border-borderDark' : 'text-label border-border'} border-b-[1px]`}>Inspeções Cadastradas</h3>
            <ul className='w-full h-full'>
                <InspectionItemList />
            </ul>
        </div>
    )
}

export default InspectionList