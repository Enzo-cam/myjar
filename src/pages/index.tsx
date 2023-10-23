import Head from 'next/head'
import { NextPage } from 'next/types'
import {Card, CardHeader, Grid, Typography} from '@mui/material'
import Layout from '@/Components/Layout'
import { EntryList } from '@/Components'

const Homepage : NextPage = () => {

  return (
    <Layout title='MyJar - Homepage'>
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh-100px)'}}>
            <CardHeader title="Pendientes" />

            <EntryList />
          </Card>
        </Grid>
    
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh-100px)'}}>
            <CardHeader title="En progreos" />
          </Card>
        </Grid>
    
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh-100px)'}}>
            <CardHeader title="Completado" />
          </Card>
        </Grid>
      </Grid>

    </Layout>
  )
}
export default Homepage;