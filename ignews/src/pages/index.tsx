import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import { GetServerSideProps } from 'next'


import styles from './home.module.scss'

interface HomeProps{
  product:{
    priceId:string;
    amount:number;
  }
}

export default function Home( {product} : HomeProps ) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>News about the <span>React</span> word.</h1>
          <p>
            Get access to all publications<br/>
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="images/avatar.svg" alt='Girl coding'/>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1J5xmsGAOFc5VG33GsXCWJ2R', {
    expand: ['product']
  })

  const product = {
    pricesId : price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency', 
      currency: 'USD'
    }).format(price.unit_amount/100),

  };

  return {
    props:{
      product,
    }
  }


}
