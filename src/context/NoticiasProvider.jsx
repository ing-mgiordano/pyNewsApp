import axios from 'axios'
import { useState, useEffect, createContext } from "react"

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general') //el primer valor de CATEGORIAS es general
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)
            /* console.log(data.articles) */
            setNoticias(data.articles)
        }
        consultarAPI()
    }, [categoria])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export  {
    NoticiasProvider
}

export default NoticiasContext
