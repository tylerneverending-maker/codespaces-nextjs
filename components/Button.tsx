import styles from './Button.module.css'
import { ComponentProps } from 'react'

export default function Button(props: ComponentProps<'button'>) {
  return <button type="button" className={styles.btn} {...props} />
}
