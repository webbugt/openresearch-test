import { PropsWithChildren } from 'react'
import { useUser } from '../hooks/useUser'

import styles from './Sidebar.module.scss'

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
            <Row>Card for {data.name}</Row>
            <Row>Card goes here</Row>
            <Row>Repeat transaction/othjer contacts</Row>
            <Row>Recent activity / transactions</Row>
           <div>{JSON.stringify(data)}</div>
        </div>
    )
} 

export default Sidebar