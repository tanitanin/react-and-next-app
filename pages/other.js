import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';

export default function Other() {
    const title = "Other Page"

    return (
        <div>
            <Layout header='Next.js' title={title}>
                <Link href='/'>
                    <a>&lt;&lt; Back to index page</a>
                </Link>
            </Layout>
        </div>
    )
}