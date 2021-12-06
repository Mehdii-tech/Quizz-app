import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { QuizContextProvider } from './contexts/quiz'
function MyApp({ Component, pageProps }: AppProps) {
  
  return <QuizContextProvider initialStaticState={{}}><Component {...pageProps} /></QuizContextProvider>
}
export default MyApp
