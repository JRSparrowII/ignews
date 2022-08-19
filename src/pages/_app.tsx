// import { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps}/>
// }

// export default MyApp

import { AppProps } from 'next/app';
import { Header } from '../components/Header';
// import { Provider as NextAuthProvider } from 'next-auth/client';
// import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* // <NextAuthProvider session={pageProps.session} > */}
        <Header />
        <Component {...pageProps} />
      {/* // </NextAuthProvider> */}
    </>
  )
}

export default MyApp