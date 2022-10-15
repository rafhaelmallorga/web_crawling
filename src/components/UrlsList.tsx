import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useWebCrawl } from '../providers/WebCrawl'
import ReactLoading from "react-loading"

const UrlsList = () => {
    const {isDark, setIsDark, modalIsOpen, setModalIsOpen, handleUrls, setHandleUrls} = useWebCrawl()

    return (
        <div className={`w-full max-w-[400px] h-[500px] p-4 ${isDark ? 'bg-backDark' : 'bg-back'}  shadow-xl rounded`}>
            <div className='flex justify-between items-center mt-2 mb-4'>
                <p className='text-logo font-semibold'>Lista de Url's</p>
                <button onClick={() => {
                    setModalIsOpen(!modalIsOpen)
                    setHandleUrls([])
                    }}
                    className={`text-[20px] text-red-500`}
                    ><AiOutlineCloseCircle/></button>
            </div>
            <ul className={`w-full h-[90%] overflow-auto ${isDark ? 'bg-back2Dark' : 'bg-hover'} p-2 rounded shadow-inner scrollbar-thin scrollbar-thumb-rounded scrollbar-track-slate-200 scrollbar-thumb-logo`}>
                {}
                {
                    handleUrls.length > 0 ? 
                    handleUrls?.map(el => <li key={el} className={`text-[14px] mb-1 ${isDark ? 'text-labelDark' : 'text-label'}`}>{el}</li>) 
                    : 
                    <div className='w-full h-full flex flex-col justify-center items-center '>
                        <span className='text-logo mb-4'>Inspecionando... </span>
                        <ReactLoading type={'spinningBubbles'} color="#436DFF" height={35} width={35}/>
                        <span className='text-logo mt-4'>Tente atualizar a requisição.</span>
                    </div>
                }
            </ul>
        </div>
    )
}

export default UrlsList