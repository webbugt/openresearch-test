

import styles from './ProfileImage.module.scss'
import Image from 'next/image'
export const ProfileImage = ({ image, name, size = 40, hasBorder = false }:{image?:string, name?: string, size?: number, hasBorder?: boolean}) => {

    const parsedSize = hasBorder ? size - 8 : size
    const shortName = name?.split(" ").map(s => s?.charAt(0).toUpperCase()).join("")
    return <div 
        className={styles.container}
        style={{
            width: parsedSize,
            height: parsedSize,
            borderRadius: parsedSize / 2,
            border: hasBorder ? `4px solid #F6F8FA` : 'none',
            overflow: "hidden"
        }}
    >
        {image ? <Image src={image} title={name} alt={name ||""} width={size} height={size} /> : <span>{shortName || "NN"}</span>}
    </div>

}

export default ProfileImage