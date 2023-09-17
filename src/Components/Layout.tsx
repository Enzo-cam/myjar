import { FC } from "react";
import Head from "next/head";

import {Box} from '@mui/material'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
    title?: string
}

const Layout: FC<Props> = ({title = 'MyJar', children}) => {
    return (
        <Box sx={{flexFlow: 1}}>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar/>
            <Sidebar/>
            
            <Box sx={{padding: "10px 20px"}}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout