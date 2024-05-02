'use client'

import { usePathname } from "next/navigation";
import Link from "next/link"
import styles from "./page.module.css"

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navBar}>
      <Link href="/" className={pathname === '/' ? styles.activeLink : styles.link}>Home</Link>
      <Link href="/about" className={pathname === '/about' ? styles.activeLink : styles.link}>About</Link>
    </nav>
  )
}