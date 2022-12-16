

import clsx from 'clsx'
import { useMemo } from 'react'
import { Icon, IconVariant } from './Icon';
import Title from './Title';
import styles from './Transaction.module.scss'


type TransactionProps = {
    type: string;
    date: string;
    amount: number;
    title: string;
}

const typeIconMap:{[key:string]:IconVariant} = {
    "sent":"incoming",
    "expense":"shop",
    "general":"paypal",
    "paypal":"paypal",
    "active":"spark",
    "recieved":"incoming"
}


export const Transaction = ({ type, date, amount, title  }: TransactionProps) => {

    const parsedDate = date

    const parsedAmount = useMemo(()=>{
        const isNegative = amount < 0
        const parsedAmount = parseFloat(Math.abs(amount).toString()).toFixed(2)
        return `${isNegative ? "-" : "+"}\u00A0$${parsedAmount}`
    },[amount])

    return <div className={clsx(styles.container)}>
        {type && typeIconMap[type] && <Icon variant={typeIconMap[type]} size={47}/> || type}
        <div className={styles.info}>
            <Title as="span" bold className={styles.title}>{title}</Title>
            <Title as="span" medium disabled>{parsedDate}</Title>
        </div>
        <Title size="large" disabled={amount<0}>{parsedAmount}</Title>
    </div>
}

export default Transaction