// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { HARDCODED_TRANSACTIONS } from './data'

const ENDPOINT = "https://swapi.dev/api/people/"



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const { id } = req.query
    const response = await axios.get(ENDPOINT + id)
    const {name, height, mass, hair_color:hairColor, skin_color:skinColor, eye_color:eyeColor, birth_year:birthYear,gender} = response.data
    const transactions = HARDCODED_TRANSACTIONS
    const parsedTransactions = await Promise.all(transactions.map(async transaction => {
        if(!transaction.id) {
            return transaction
        }
        const transferUser = await axios.get(ENDPOINT + transaction.id).then(resp=>resp.data)
        if(!transferUser) {
            return null
        }
        const { name } = transferUser
        return {
            name, ...transaction
        }
    })).then(res => res.filter(Boolean))
    const output = {
        name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender,
        transactions: parsedTransactions
    }
    res.status(200).json(output)
}
