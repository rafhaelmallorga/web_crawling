import React from 'react'
import { GrUpdate, GrStatusCriticalSmall } from "react-icons/gr"
import { BiLoaderCircle } from "react-icons/bi"
import { RiDeleteBinFill } from "react-icons/ri"
import { FiPlusCircle } from "react-icons/fi"
import { useWebCrawl } from '../providers/WebCrawl'

const InspectionItemList = () => {
    const {isDark, setIsDark} = useWebCrawl()


    return (
        <li className={`w-full h-[50px] px-10 flex justify-between items-center ${isDark ? 'bg-backDark text-labelDark border-borderDark' : 'bg-back text-label border-border'} border-b-[1px] ${isDark ? 'hover:bg-hoverDark' : 'hover:bg-hover'} transition ease-in duration-500`}>
            <div className='flex justify-center items-center font-normal'>
                <GrStatusCriticalSmall className='mr-2'/>
                <span>Status: <span className='font-semibold'>DONE</span></span>
            </div>
            <span className='font-normal'>ID: <span className='font-semibold'>OOpRO9vr</span></span>
            <button className='flex justify-center items-center font-semibold bg-logo px-2 text-white rounded-sm'><FiPlusCircle className='mr-1' />urls</button>
            <div className='w-[180px] flex justify-between items-center'>
                <button className='flex justify-center items-center text-[14px] text-logo'>
                    <BiLoaderCircle className='mr-1 text-[18px]' />
                    Atualizar
                </button>
                <button>
                    <RiDeleteBinFill color='red'/>
                </button>
            </div>
        </li>
    )
}

export default InspectionItemList