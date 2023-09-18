// Recibe un estado y una accion y produce un nuevo estado.
import { IState } from "./UIProvider"

type UIType = 
| {type: 'UI - Open sidebar'}
| {type: 'UI - Close sidebar'}

export const uiReducer = (state: IState, action: UIType): IState =>{
    
    switch(action.type){
        case 'UI - Open sidebar':
            return {
                ...state,
                sidebarMenuOpen: true
            }
        case 'UI - Close sidebar':
            return {
                ...state,
                sidebarMenuOpen: false
            }

        default:
            return state;
    }
}