"use client"
import { useQuery } from 'react-query'
import axios from 'axios'
const ENDPOINT = (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000') + '/api/user/' 

export const useUser = (id?:string) => useQuery('user/' + id, () =>
    axios.get(ENDPOINT + id).then(res =>
        res.data
    )
)   