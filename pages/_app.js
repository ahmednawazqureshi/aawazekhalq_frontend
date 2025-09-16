import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (

    <>
    
      <Header /> {/* Global Header */}
      <main>
        <Component {...pageProps} /> {/* Page Content */}
      </main>
      <Footer /> {/* Global Footer */}
    </>
  )
}
