import styles from './head.module.scss'

interface ComponentProps {
    language: string;
    span: string;
    text: string;
  }

const Head: React.FC<ComponentProps> = ({language,text,span}) => {
    return (
        <div className={styles.head}>
            <p> {text} <span className={styles.headSpan}> {span} </span> {language} </p>
        </div>
    )
}

export default Head