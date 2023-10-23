import { FC, useReducer, ReactNode } from "react";
import JarContext from "./UIContext";
import { uiReducer } from "./uiReducer";

export interface IState {
  sidebarMenuOpen: boolean;
}

const UI_InitialState: IState = {
  sidebarMenuOpen: false,
};

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_InitialState);

  const openSideMenu = () => {
    dispatch({type: 'UI - Open sidebar'})
  }

  const closeSideMenu = () => {
    dispatch({type: 'UI - Close sidebar'})
  }

  return (
    <JarContext.Provider value={{ 
        ...state,
        openSideMenu,
        closeSideMenu,
    }}>
      {children}
    </JarContext.Provider>
  );
};
