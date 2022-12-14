import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import InspectionList from '../components/InspectionList'
import ModalBaclground from '../components/ModalBaclground'
import UrlsList from '../components/UrlsList'
import { useWebCrawl } from '../providers/WebCrawl'

const Home = () => {
  const {isDark, setIsDark, modalIsOpen} = useWebCrawl()

  return (
    <div className={`w-full h-full font-poppins flex flex-col justify-start items-center ${isDark ? 'bg-back2Dark' : 'bg-back2' } transition ease-in duration-500 `}>
      <Header />
      <Form />
      <InspectionList />
      <ModalBaclground modalIsOpen={modalIsOpen}>
        <UrlsList />
      </ModalBaclground>
    </div>
  )
}

export default Home