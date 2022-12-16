import clsx from 'clsx'
import { PropsWithChildren, useMemo } from 'react'
import { useUser } from '../hooks/useUser'
import { Icon } from './Icon'
import ProfileImage from './ProfileImage'

import styles from './Sidebar.module.scss'
import Title from './Title'
import Transaction from './Transaction'
import UserList from './UserList'

const Row = ({children, className, shadow}:PropsWithChildren<{className?:string, shadow?:boolean}>) =>{
    return (
        <div className={clsx(styles.row, className, shadow && styles.shadow)}>
            {children}
        </div>
    )
}
type SidebarProps = {
    id?: string
}
const Sidebar = ({id}:SidebarProps) =>{
    const { isLoading, error, data } = useUser(id)

    const historyUsers = useMemo(()=>{
        const transactions = data?.transactions || []
        const users = transactions.filter((t: any) => t?.id).map((t: any) => ({ ...t, date: new Date(t.date) })).slice(0, 5)
        return users.map(({id, image, name}:any) => ({id, image, name}))
    },[data])


    if(!id){
        return <h2>User needs to login</h2>
    }
    if(isLoading){
        return <h2>Loading</h2>
    }
    if(error){
        return <h2>Error</h2>
    }
    return (
        <div className={styles.container}>
            <Row className={styles.header}>
                <Icon variant="notification" size={54}/>
                <ProfileImage image={data.image} size={50} hasBorder/></Row>
            <Row shadow>
                <Title>Your Card</Title>
                Card goes here
                </Row>
            <Row>
                <Title>Send Again</Title>
                <UserList users={historyUsers}/>
                </Row>
            <Row>
                <Title>Recent Activity</Title>
               {data.transactions.map(
                ({name="Transaction", date, amount, type}:any,i:number) => (<Transaction key={date+name+i} title={name} type={type} amount={amount} date={date}/>)
                )}
                
            </Row>
        </div>
    )
} 

export default Sidebar