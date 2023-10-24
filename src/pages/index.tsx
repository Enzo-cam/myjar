import Head from 'next/head'
import { NextPage } from 'next/types'
import {Card, CardHeader, Grid, Typography} from '@mui/material'
import Layout from '@/Components/Layout'
import { EntryList } from '@/Components'
import { blue } from '@mui/material/colors'

const Homepage : NextPage = () => {

  return (
    <Layout title='MyJar - Homepage'>
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh-100px)', backgroundColor: '#001d3d'}}>
            <CardHeader title="Pendientes" sx={{color: 'white'}} />

            <EntryList status='Pending' />
          </Card>
        </Grid>
    
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh-100px)', backgroundColor: '#001d3d'}}>
            <CardHeader title="En progreos" sx={{color: 'white'}}/>
            <EntryList status='In progress' />
          </Card>
        </Grid>
    
        <Grid item xs={12} sm={4}>
          <Card sx={{height: 'calc(100vh-100px)', backgroundColor: '#001d3d'}}>
            <CardHeader title="Completado" sx={{color: 'white'}}/>
            <EntryList status='Finished' />
          </Card>
        </Grid>
      </Grid>

    </Layout>
  )
}
export default Homepage;