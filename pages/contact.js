import Head from 'next/head'
import Main from '../components/Contact/Main'
import Footer from '../components/Footer'
import Header from '../components/Header'

const contact = () => {
  return (
    <div>
        <Head>
            <title>myteam | Contact Us</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default contact