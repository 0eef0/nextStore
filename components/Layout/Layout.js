import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "Isezaki Ijincho" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
          <div className={styles.navLeft}>
            <img src="https://res.cloudinary.com/ddmjp5x8t/image/upload/v1653117084/Next%20Store%20Project/Website%20Assets/logo_yf3pry.png" alt="Logo" />
          </div>
          <div className={styles.navRight}>
            <a href="/">Home</a>
            <a href="/store/search">Store</a>
            <a href="login">Login</a>
          </div>
      </nav>
      <main className={styles.main}>{children}</main>
      <footer>
          test
      </footer>
    </>
  )
}

export default Layout