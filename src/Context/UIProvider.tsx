import {FC} from 'react'
import JarContext from './UIContext';

export interface IState {
    sideMenuOpen : boolean;
}

const UI_InitialState : IState = {
    sideMenuOpen: false,
}

export const UIProvider: FC = ({children}) =>{
    return(
        <JarContext.Provider value={{sidebarMenuOpen: false}}>
            {
                children
            }
        </JarContext.Provider>
    )
}