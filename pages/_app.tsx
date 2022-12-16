// import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  weight: ['400','500','700'],
  subsets: ['latin','latin-ext'],
})

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={montserrat.className} >
        <Component {...pageProps} /></main>
    </QueryClientProvider>
  )
}
