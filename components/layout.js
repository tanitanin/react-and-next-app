//import { Html, Head, Main, NextScript } from 'next/document'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
            </Head>
            <Header header={props.header}/>
            <main>
                <div className='container'>
                    <h3 className='my-3 text-primary text-center'>{props.title}</h3>
                    {props.children}
                </div>
            </main>
            <Footer footer='Copyright @tanitanin' />
        </div>
    )
}
