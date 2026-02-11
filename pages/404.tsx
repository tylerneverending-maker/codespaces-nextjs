import Link from 'next/link'

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </div>
  )
}