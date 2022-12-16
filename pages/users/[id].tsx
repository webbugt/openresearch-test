"use client"
import {  useQuery } from 'react-query'
import { useRouter } from "next/router"
import axios from 'axios'
const ENDPOINT = (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000') + '/api/user/' 
export default function TransactionPage() {
    const router = useRouter()
    const { id } = router.query

    const { isLoading, error, data } = useQuery('repoData', () =>
        axios.get(ENDPOINT+id).then(res =>
            res.data
        )
    )
    
    return (
        <div>
            <h1>Transaction Page {id}</h1>
            {isLoading ? (<h2>Loading</h2>):(<div>{JSON.stringify(data)}</div>)}
        </div>
    )
}