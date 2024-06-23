import { createContext, useState } from "react"
const LayoutSession = createContext()
const LayoutContext = ({ children }) =>{
    const [LoaderOptions, setLoaderOptions] = useState({ type:'ClipLoader', color : '#000', size : 50, speedMultiplier : 0.5 });
    return(
        <LayoutSession.Provider value={{LoaderOptions, setLoaderOptions}}>
            { children }
        </LayoutSession.Provider>
    )
}

export {LayoutContext, LayoutSession}