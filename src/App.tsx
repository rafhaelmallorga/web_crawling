import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'


function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-start items-center">
      <Toaster position='top-right' />
      <Home />
    </div>
  )
}

export default App
