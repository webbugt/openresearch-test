import ProfileImage from "./ProfileImage"

import styles from './UserList.module.scss'
export type User = {
    image?: string,
    name: string,
    id: string | number
    }

export const UserList = ({users}:{users:User[]}) => {
    return (
        <div className={styles.container}>
            {users.map((user, i) => <ProfileImage key={user.name+i} image={user.image} name={user.name}/>)}
        </div>
    )
}

export default UserList