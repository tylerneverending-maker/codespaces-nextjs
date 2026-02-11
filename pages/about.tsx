import Link from 'next/link'
import styles from '../styles/home.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <hr className={styles.hr} />
      <Link href="/">Go back home</Link>
    </main>
  )
}