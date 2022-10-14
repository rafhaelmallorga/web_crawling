import React from 'react'
import { useWebCrawl } from '../providers/WebCrawl'

const Toggle = () => {
    const { isDark, setIsDark } = useWebCrawl()

    return (
        <div className={`${isDark ? 'toggleFieldActive' : 'toggleField'}`} onClick={() => {
            setIsDark(!isDark)
        }}>
            <i className={`indicator ${isDark ? 'toggleActive' : 'toggleNotActive'}`}/>
        </div>
    )
}

export default Toggle