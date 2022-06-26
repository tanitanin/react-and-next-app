import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header';

export default function Home() {
  let title = "Next.js Page";
  let message = "This is nextjs sample page.";

  return (
    <div className={styles.container}>
      <Header title={title} />
      
      <main>
        <h1 className='bg-primary text-white display-4'>React</h1>
        <div className='container'>
          <h4 className='my-3'>{title}</h4>
          <div className='alert alert-primary text-center'>
            <p className='h5'>{message}</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
