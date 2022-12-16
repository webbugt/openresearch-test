

import styles from './ProfileImage.module.scss'
import Image from 'next/image'
export const ProfileImage = ({ image, name, size = 40, hasBorder = false }:{image?:string, name?: string, size?: number, hasBorder?: boolean}) => {

    const shortName = name?.split(" ").map(s => s?.charAt(0).toUpperCase()).join("")
    return <div 
        className={styles.container}
        style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            border: hasBorder ? `4px solid #F6F8FA` : 'none',
            overflow: "hidden"
        }}
    >
        {image ? <Image src={image} title={name} alt={name || ""}  fill /> : <div className={styles.name}><span>{shortName || "NN"}</span></div>}
    </div>

}

export default ProfileImage