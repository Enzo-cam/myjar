import {createContext} from 'react'
import { Entry } from '@/Interfaces';

interface ContextProps {
     entries : Entry[]; //Las context prop seran un arreglo de entradas siguiendo la interfaz declarada.
}

export const EntriesContext = createContext({} as ContextProps)