import Head from 'next/head'
import { NextPage } from 'next/types'
import {Typography} from '@mui/material'
import Layout from '@/Components/Layout'

const Homepage : NextPage = () => {

  return (
    <Layout title='MyJar - Homepage'>
            <Typography variant="h3" color="error">Hola enzo</Typography>
    </Layout>
  )
}
export default Homepage;