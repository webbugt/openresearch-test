
import Image from 'next/image'
import styles from './Icon.module.scss'
const IconVariant = {
    "NOTIF": "notification",
    "SHOP": "shop",
    "INCOMING": "incoming",
    "PAYPAL": "paypal",
    "SPARK":"spark"
} as const

type IconVariant = typeof IconVariant[keyof typeof IconVariant]

const IconFileNameMap:{[k in IconVariant]:string} = {
    "notification": "/icons/notification.svg",
    "shop": "/icons/shop.svg",
    "incoming": "/icons/incoming.svg",
    "paypal": "/icons/paypal.svg",
    "spark": "/icons/spark.svg"
}

type IconProps = {
    variant?: IconVariant,
    size?: number
}

export const Icon = ({variant="spark", size=47}:IconProps) =>{
    const iconFile = IconFileNameMap[variant] || IconFileNameMap["spark"]
    return <div className={styles.container} style={{width:size, height: size}}>
        <div className={styles.image_wrapper}>
            <Image src={iconFile} alt={variant} width={size - 30} height={size - 30} />
        </div>
    </div>
}