import React, { useState } from 'react'
import { useWebCrawl } from '../providers/WebCrawl'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { NewInspectionInterface } from '../interfaces'


const Form = () => {
    const { isDark, setIsDark, createNewInspection } = useWebCrawl()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const schema = yup.object().shape({
        keyword: yup.string().required('Digite a palavra chave!')
    })

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<NewInspectionInterface>({
        resolver: yupResolver(schema)
    })

    const handleNewInspection = async (data: NewInspectionInterface) => {
        setIsLoading(true)
        await createNewInspection(data)
        setIsLoading(false)

        reset({
            keyword: ''
        })
    }

    return (
        <div className={`w-full max-w-[1000px] h-[200px] ss:h-[180px] my-4 ${isDark ? 'bg-backFormDark' : 'bg-backForm'} shadow transition ease-in duration-500`}>
            <div className={`px-10 py-5 text-[22px] font-semibold ${isDark ? 'text-titleDark' : 'text-title'} transition ease-in duration-500`}>
                <h3>Cadastre sua solicitação de inspeção</h3>
            </div>
            <form onSubmit={handleSubmit(handleNewInspection)} className={`px-10 w-full flex items-end`}>
                <div className={`flex flex-col`}>
                    <label htmlFor="keyword" className={`text-[14px] font-semibold ${isDark ? 'text-labelDark' : 'text-label transition ease-in duration-500'}`}>Palavra chave:</label>
                    <input type="text" {...register("keyword")} className={`w-full h-[40px] rounded-sm mt-2 pl-4 outline-none font-normal ${isDark ? 'bg-backDark text-white' : 'bg-white text-title'} transition ease-in duration-500`} placeholder={'Ex: Security'}/>
                </div>
                <button type='submit' className={`bg-logo h-[40px] ml-8 px-4 rounded-sm text-white font-semibold hover:brightness-90`}>Cadastrar</button>
            </form>
        </div>
    )
}

export default Form