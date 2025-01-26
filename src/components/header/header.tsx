import Link from "next/link";
import styles from "./header.module.scss";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.textContainer}>
                <Link className={styles.text} href='/'> <p>Главная</p> </Link> 
                <Link className={styles.text} href='/development'> <p>Разработка сайтов</p> </Link>
                <Link className={styles.text} href='/aboutUs'> <p>О нас</p> </Link>
            </div>
        </div>
    )
}