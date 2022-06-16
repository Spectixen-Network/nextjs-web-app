import Head from "next/head"
import ArticleList from "../components/ArticleList"
import styles from '../styles/Index.module.css'

const articles = ({articles}) => {
  return (
    <div className={styles.container}>
        <Head>
            <title>STXN | Articles</title>
        </Head>

        <ArticleList articles={articles}/>

    </div>
  )
}

export default articles

export const getStaticProps = async ( ) => {
  const res = await fetch (`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}