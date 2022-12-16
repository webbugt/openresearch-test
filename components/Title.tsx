

import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import styles from './Title.module.scss'

type TitleProps = {
    disabled?: boolean
}

export const Title = ({ children, disabled }: PropsWithChildren<TitleProps>) => {
  
    return <h2 className={clsx(styles.title, disabled && styles.disabled)}>{children}</h2>
}

export default Title