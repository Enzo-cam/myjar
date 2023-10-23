import {createContext} from 'react'

interface ContextProps {
     sidebarMenuOpen : boolean;
     openSideMenu : () => void;
     closeSideMenu : () => void;
}

const JarContext = createContext({} as ContextProps)

export default JarContext