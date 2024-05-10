import React from 'react';
import Link from 'next/link';

import styles from './LinkButton.module.css';

const LinkButton = ({ href, text }) => {
  return (
    <Link href={href} className={styles.contactLink}>{text}</Link>
  )
}

export default LinkButton;