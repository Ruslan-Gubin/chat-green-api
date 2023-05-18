import { Chat } from '@/widgets';
import styles from '../app/styles/pages/Home.module.scss';


export default function Home() {
  return (
    <section className={styles.root}>
    <Chat />
    </section>
  )
}
