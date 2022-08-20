// import {GetServerSideProps} from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'
// import {stripe} from '../services/stripe'

export default function Home({product}) {
  return (
    <>
      <Head>
        <title> Home | IgNews</title>
      </Head>
      <main className={styles.contextContainer}>
        <section className={styles.hero}>
          <span>Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all the publications <br/>
            <span>for 9,90 month</span> 
          </p>
          <SubscribeButton/>
        </section>
        <img src="images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}
