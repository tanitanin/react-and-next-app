import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';

export default function Home() {
  let title = "Top page.";
  let message = "This is nextjs sample page.";

  return (
    <div>
      <Layout header='Next.js' title={title}>
        <div className='alert alert-primary text-center'>
          <p className='h5'>{message}</p>
        </div>
        <Link href='/other'>
          <a>Go to other page &gt;&gt;</a>
        </Link>
      </Layout>
    </div>
  )
}
