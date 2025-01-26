import Head from "@/components/head/head";
import styles from "./page.module.scss";
import { Text } from "@/components/text/text";
import Image from "next/image";

export default function Developments() {

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.left}>

          <Head text="ПЕРСОНАЛЬНАЯ" span="РАЗРАБОТКА САЙТОВ" language="НА NEXT" />
          <Text text="Создаю сайты НА Next с уникальным дизайном, чёткой структурой, логичным и удобным интерфейсом. А ещё у меня индивидуальный подход к каждому клиенту." />

          <div className={styles.buttonContainer}>
            <button className={styles.button} style={{ background: '#8873EF', color: '#FFFFFF' }}>Написать</button>
            <button className={styles.button} style={{ background: 'none', color: '#000000' }}>Портфолио
              <svg style={{ marginLeft: '19px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5724 0.999977C17.5724 0.447692 17.1247 -2.28654e-05 16.5724 -2.28654e-05L7.57241 -2.28654e-05C7.02013 -2.28654e-05 6.57241 0.447692 6.57241 0.999977C6.57241 1.55226 7.02013 1.99998 7.57241 1.99998H15.5724V9.99998C15.5724 10.5523 16.0201 11 16.5724 11C17.1247 11 17.5724 10.5523 17.5724 9.99998L17.5724 0.999977ZM1.70711 17.2795L17.2795 1.70708L15.8653 0.29287L0.292893 15.8653L1.70711 17.2795Z" fill="#18171C" />
              </svg>
            </button>
          </div>

          <div className={styles.socialContainer}>
            <div className={styles.text}>Я в сети:</div>
            <div className={styles.iconContainer}>
              <Image src='/png/inst.png' alt="" width={60} height={60}/>
              <Image src='/png/vk.png' alt="" width={60} height={60}/>
              <Image src='/png/b6.png' alt="" width={60} height={60}/>
            </div>
          </div>

        </div>

        <div className={styles.right}>
          <Image src='/png/aleksander.png' alt="" width={531} height={593} />
        </div>
      </div>
    </div>
  );

}
