import { useUser } from '../hooks/useUser'


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
        <div>
            <h1>Sidebar for {data.name}</h1>
           <div>{JSON.stringify(data)}</div>
        </div>
    )
} 

export default Sidebar