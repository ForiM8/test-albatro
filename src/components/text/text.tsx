import styles from "./text.module.scss"

interface ComponentProps {
    text: string;
  }

export const Text: React.FC<ComponentProps> = ({ text }) => {
    return (
        <div className={styles.textContainer}>
            <div className={styles.line}></div>
            <div className={styles.text}>
                <p>{text}</p>
            </div>
        </div>
    )
}