

import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import styles from './Title.module.scss'

const TitleSizeVariant = {
    "BASE": "base",
    "LARGE": "large",
    "XL": "xl",
} as const

type TitleSizeVariant = typeof TitleSizeVariant[keyof typeof TitleSizeVariant]

type TitleProps = {
    disabled?: boolean,
    size?: TitleSizeVariant,
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p",
    bold?: boolean,
    medium?: boolean,
    className?:string
}


export const Title = ({ children, disabled, size="base", as:Component="h2", bold, medium, className }: PropsWithChildren<TitleProps>) => {
    return <Component className={clsx(styles.title, className, disabled && styles.disabled, styles[size], bold && styles.bold || medium && styles.medium)}>{children}</Component>
}

export default Title