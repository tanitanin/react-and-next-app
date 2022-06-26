import { useState } from 'react'
import useSWR from 'swr';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';

export default function Home() {
  let title = "Top page."
  const [pref, setPref] = useState({ id: 0, item: 'name' })
  const [address, setAddress] = useState('/api/user/' + pref.id + '/' + pref.item)
  const { data, err } = useSWR(address, url=>fetch(url).then(r=>r.json()))
  
  const onChange = (e)=>{
    pref.id = e.target.value
    setPref(pref)
    setAddress('/api/user/' + pref.id + '/' + pref.item)
  }
  const onSelect = (e)=>{
    pref.item = e.target.value
    setPref(pref)
    setAddress('/api/user/' + pref.id + '/' + pref.item)
  }

  return (
    <div>
      <Layout header='Next.js' title={title}>
        <div className='alert alert-primary text-center'>
          <p className='h5'>{data != undefined ? JSON.stringify(data) : 'error...' }</p>
        </div>
        <input type='number' className='form-control form-control-sm mb-2' onChange={onChange} />
        <select className='form-control form-control-sm' onChange={onSelect}>
          <option value="name">Name</option>
          <option value="mail">Mail</option>
          <option value="age">Age</option>
        </select>
        <Link href='/other'>
          <a>Go to other page &gt;&gt;</a>
        </Link>
      </Layout>
    </div>
  )
}
