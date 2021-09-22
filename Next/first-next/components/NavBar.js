import React from 'react';
import Link from "next/link";
import styles from './NavBar.module.css';

export default function NavBar(){
  return(
    <div className={styles.NavBar}>
      <Link href='/about'><a>About page</a></Link>
    </div>
  )
}
