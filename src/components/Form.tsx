import React from 'react'
import { useWebCrawl } from '../providers/WebCrawl'

const Form = () => {
    const { isDark, setIsDark } = useWebCrawl()

    return (
        <div className={`w-full max-w-[1000px] h-[180px] my-4 ${isDark ? 'bg-[#272c38] border-borderDark' : 'bg-backForm border-border'} shadow`}>
            <div className={`px-10 py-5 text-[22px] font-semibold ${isDark ? 'text-titleDark' : 'text-title'}`}>
                <h3>Cadastre sua solicitação de inspeção</h3>
            </div>
            <form className={`px-10 w-full flex items-end`}>
                <div className={`flex flex-col`}>
                    <label htmlFor="keyword" className={`text-[14px] font-semibold ${isDark ? 'text-labelDark' : 'text-label'}`}>Palavra chave:</label>
                    <input type="text" className={`h-[40px] rounded-sm mt-2 pl-4 outline-none font-normal ${isDark ? 'bg-backDark text-white' : 'bg-white text-title'}`} placeholder={'Ex: Security'}/>
                </div>
                <button className={`bg-logo h-[40px] ml-8 px-4 rounded-sm text-white font-semibold hover:brightness-90`}>Cadastrar</button>
            </form>
        </div>
    )
}

export default Form