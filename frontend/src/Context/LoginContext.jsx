import { createContext, useState } from "react"
const SessionContext = createContext()
const LoginContext = ({ children }) =>{
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [task, setTask] = useState([])
    
    return(
        <SessionContext.Provider value={{formData, setFormData, task, setTask}}>
            { children }
        </SessionContext.Provider>
    )
}

export {LoginContext, SessionContext}