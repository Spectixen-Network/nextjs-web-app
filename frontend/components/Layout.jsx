import styles from '../styles/Layout.module.css'
import NavbarDefault from '../components/NavbarDefault'

const Layout = ({children}) => {
  return (
    
  <div className={styles.body}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
      </head>
        <NavbarDefault></NavbarDefault>
        <main className={styles.main}>{children}</main>
  </div>
  )
}

export default Layout