import React from 'react'
import { TbVirusSearch } from 'react-icons/tb'
import { useWebCrawl } from '../providers/WebCrawl'
import Toggle from './Toggle'

const Header = () => {
    const { isDark, setIsDark } = useWebCrawl()

    return (
        <div className={`w-full h-[70px] flex justify-center items-center ${isDark ? 'bg-backDark border-borderDark' : 'bg-back border-border'} border-b-[1px] shadow-sm`}>
            <div className='w-full max-w-[1000px] flex justify-between items-center'>
                <section className='flex justify-center items-center'>
                    <TbVirusSearch className='text-logo text-[40px]'/>
                    <span className={`text-[30px] font-bold ${isDark ? 'text-titleDark' : 'text-title'} ml-6`}>Web Crawling</span>
                </section>
                <Toggle />
            </div>
        </div>
    )
}

export default Header