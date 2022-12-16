"use client"
import {  useQuery } from 'react-query'
import { useRouter } from "next/router"
import axios from 'axios'
const ENDPOINT = ("http://192.168.1.93:3000" || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000') + '/api/user/' 


import styles from './[id].module.scss'
import Sidebar from '../../components/Sidebar'
export default function TransactionPage() {
    const router = useRouter()
    const id = router?.query?.id
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar id={Array.isArray(id)?id[0]:id}/>
            </div>
            <div className={styles.main}>
                <h1>Main</h1>
            </div>
        </div>
    )
}