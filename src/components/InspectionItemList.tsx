import React from 'react'
import { GrUpdate, GrStatusCriticalSmall } from "react-icons/gr"
import { BiLoaderCircle } from "react-icons/bi"
import { RiDeleteBinFill } from "react-icons/ri"
import { FiPlusCircle } from "react-icons/fi"
import { useWebCrawl } from '../providers/WebCrawl'
import { InspectionListInterface } from '../interfaces'

interface IInspection {
    inspection: InspectionListInterface
}

const InspectionItemList = ({ inspection }: IInspection) => {
    const {isDark, setIsDark, retrieveInspectionById, deleteInspectionById, modalIsOpen, setModalIsOpen, handleUrls, setHandleUrls} = useWebCrawl()


    return (
        <li key={inspection.id} className={`w-full h-[50px] text-[14px] ss:text-[16px] px-10 flex justify-between items-center ${isDark ? 'bg-backDark text-labelDark border-borderDark' : 'bg-back text-label border-border'} border-b-[1px] ${isDark ? 'hover:bg-hoverDark' : 'hover:bg-hover'} transition ease-in duration-500`}>
            <div className='w-[30%] ss:w-[20%] flex justify-start items-center font-normal'>
                <GrStatusCriticalSmall className={`mr-2 ${inspection.status === 'active' ? 'text-yellow-300' : 'text-green-500'}`}/>
                <span>Status: <span className='font-semibold'>{inspection.status.toUpperCase()}</span></span>
            </div>
            <span className='w-[30%] ss:w-[20%] font-normal'>ID: <span className='font-semibold'>{inspection.id}</span></span>
            <button onClick={() => {
                setModalIsOpen(!modalIsOpen)
                setHandleUrls(inspection.urls)
            }} className='flex justify-center items-center font-semibold bg-logo px-2 text-white rounded-sm'>
                <FiPlusCircle className='ss:mr-1' />
                <span className='hidden ss:block'>urls</span>
            </button>
            <div className='ss:w-[180px] flex justify-between items-center'>
                <button onClick={() => retrieveInspectionById(inspection.id)} className={`flex mr-4 justify-center items-center text-[14px] text-logo  ${inspection.status === 'done' && 'opacity-25 cursor-not-allowed'}`}>
                    <BiLoaderCircle className='mr-1 text-[18px]' />
                    <span className='hidden ss:block'>
                        Atualizar
                    </span>
                </button>
                <button onClick={() => deleteInspectionById(inspection.id)}>
                    <RiDeleteBinFill color='red'/>
                </button>
            </div>
        </li>
    )
}

export default InspectionItemList