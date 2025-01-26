import Head from "@/components/head/head";
import styles from "./page.module.scss";
import { Text } from "@/components/text/text";
import Image from "next/image";

export default function Developments() {

  return (
    <div className={styles.page}>

      <div className={styles.container}>
        
        <div className={styles.left} style={{marginBottom: '149px'}}>
          <Head text="НАША" span="МИССИЯ" language="" />
          <Text text="Наша миссия — создавать уникальные и функциональные сайты, которые помогают нашим клиентам достигать их бизнес-целей. Мы стремимся к тому, чтобы каждый проект, над которым мы работаем, был не только визуально привлекательным, но и удобным в использовании. Мы верим, что качественный дизайн и удобный интерфейс могут значительно повысить эффективность бизнеса и улучшить взаимодействие с клиентами." />
        </div>
        <div className={styles.right}>
          <Image src='/png/vadim.png' alt="" width={531} height={593} />
        </div>
      </div>

      <div className={styles.container} style={{height:'auto', alignItems:'center'}}>
        <div className={styles.right}>
          <Image src='/png/aleksander.png' alt="" width={531} height={593} />
        </div>
        <div className={styles.left}>
          <Head text="НАШИ" span="ЦЕННОСТИ" language="" />
          <Text text="В основе нашей работы лежат несколько ключевых ценностей, которые помогают нам достигать высоких результатов. Мы ценим индивидуальный подход к каждому клиенту, внимание к деталям и стремление к совершенству. Мы постоянно совершенствуем свои навыки и следим за последними тенденциями в области веб-дизайна и разработки, чтобы предлагать нашим клиентам самые современные и эффективные решения." />
        </div>
      </div>

    </div>
  );

}
