import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/home.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <hr className={styles.hr} />
      <Link href="/">Go back home</Link>
    </main>
  )
}