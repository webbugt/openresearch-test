import { PropsWithChildren, useMemo } from 'react'
import { useUser } from '../hooks/useUser'
import ProfileImage from './ProfileImage'

import styles from './Sidebar.module.scss'
import UserList from './UserList'

const Row = ({children}:PropsWithChildren<{}>) =>{
    return (
        <div className={styles.row}>
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
            <Row><ProfileImage image={data.image} size={50} hasBorder/></Row>
            <Row>Card goes here</Row>
            <Row><UserList users={historyUsers}/></Row>
            <Row>Recent activity / transactions</Row>
           <div>{JSON.stringify(data)}</div>
        </div>
    )
} 

export default Sidebar