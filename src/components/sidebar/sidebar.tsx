"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.scss";

export const Sidebar = () => {

  const url = usePathname();

  return (
    <div className={styles.sidebarContainer}>
      <Link href='/development/tilda'>
        <button className={`${styles.button} ${url === '/development/tilda' ? styles.active : ''}`}> <p>TILDA</p> </button>
      </Link>
      <Link href='/development/react'>
        <button className={`${styles.button} ${url === '/development/react' ? styles.active : ''}`}> <p>React</p> </button>
      </Link>
      <Link href='/development/angular'>
        <button className={`${styles.button} ${url === '/development/angular' ? styles.active : ''}`}> <p>Angular</p> </button>
      </Link>
      <Link href='/development/vue'>
        <button className={`${styles.button} ${url === '/development/vue' ? styles.active : ''}`}> <p>Vue</p> </button>
      </Link>
      <Link href='/development/next'>
        <button className={`${styles.button} ${url === '/development/next' ? styles.active : ''}`}> <p>Next</p> </button>
      </Link>
    </div>
  );
};