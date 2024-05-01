'use client'

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import Link from "next/link"
import styles from "./page.module.css"

export default function NavBar() {
  const pathname = usePathname();
  const [active, setActive] = useState('/home');

  useEffect(() => {
    console.log('check', pathname, active)
    if (pathname === '/' && active === '/home') {
      return
    } else if (pathname !== active) {
      setActive(pathname);
    }
  }, [])

  return (
    <div className={styles.navBar}>
      <Link href="/" onClick={() => setActive('/home')} className={active === '/home' ? styles.activeLink : styles.link}>Home</Link>
      <Link href="/about" onClick={() => setActive('/about')} className={active === '/about' ? styles.activeLink : styles.link}>About</Link>
    </div>
  )
}