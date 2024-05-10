'use client'

import { usePathname } from "next/navigation";
import Link from "next/link"
import { navBarLinks }from "../../data";
import styles from "./page.module.css"

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navBar}>
      {navBarLinks.map((link, index) => {
        return (
          <Link key={index} href={link.href} className={pathname === link.href ? styles.activeLink : styles.link}>{link.text}</Link>
        )
      })}
    </nav>
  )
}