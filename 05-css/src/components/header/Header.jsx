import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>Yuvraj</h1>
        <button>Login</button>
    </div>
  )
}

export default Header