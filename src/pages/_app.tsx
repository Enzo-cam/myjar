import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme } from '@/themes'
import { EntriesProvider } from '@/Context/Entries'
import { UIProvider } from '@/Context/UI/UIProvider'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  ) 
}
