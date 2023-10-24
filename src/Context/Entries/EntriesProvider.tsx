import {FC, useReducer} from 'react'
import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/Interfaces';
import {v4 as uuidv4 } from 'uuid'

export interface EntriesState{
    entries: Entry[]
}

const Entries_IS : EntriesState ={
    entries: [
        {
            _id: uuidv4(),
            description: 'Pending: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt ad consectetur eaque porro soluta nam, vero illum amet ipsa.',
            status: 'Pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'In progress: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt ad consectetur  .',
            status: 'In progress',
            createdAt: Date.now() - 190242,
        },
        {
            _id: uuidv4(),
            description: 'Finished: Lor amet consectetur adipisicing elit. Fuga nesciunt ad consectetur eaque porro soluta nam, vero illum amet ipsa.',
            status: 'Finished',
            createdAt: Date.now() - 1000000,
        }
    ],
}

export const EntriesProvider: FC = ({ children }) => {

     const [state, dispatch] = useReducer(entriesReducer, Entries_IS)

     return(
        <EntriesContext.Provider value={{
            ...state, //
        }}>
           {
            children
           }
        </EntriesContext.Provider>
     )
}