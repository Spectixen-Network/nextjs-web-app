import styles from '../styles/Layout.module.css'
import NavbarDefault from '../components/NavbarDefault'

const Layout = ({children}) => {
  return (
    <div className={styles.body}>
        <NavbarDefault></NavbarDefault>
        <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout