import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import { useWebCrawl } from '../providers/WebCrawl'

const Home = () => {
  const {isDark, setIsDark} = useWebCrawl()

  return (
    <div className={`w-full h-full font-poppins flex flex-col justify-start items-center ${isDark ? 'bg-back2Dark' : 'bg-back2' }`}>
      <Header />
      <Form />
    </div>
  )
}

export default Home