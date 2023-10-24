import {FC, useContext, useMemo} from 'react'
import { EntriesContext } from '@/Context/Entries'
import {Paper, List} from '@mui/material'
import EntryCard from './EntryCard'
import { EntryStatus } from '@/Interfaces'

interface Props{
    status: EntryStatus;
}


export const EntryList:FC<Props> = ({status}) => {

    const {entries} = useContext(EntriesContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])
    
    


    return (
        // TODO: Aqui se da el drop
        <div>
            <Paper sx={{height: 'calc(100vh - 180px)', backgroundColor: 'transparent', padding: '1px 5px' }}>
                <List sx={{opacity: 1}}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>

            </Paper>
        </div>
    )
}
