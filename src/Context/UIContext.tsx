import {createContext} from 'react'

interface ContextProps {
     sidebarMenuOpen : boolean;
}

const JarContext = createContext({} as ContextProps)

export default JarContext