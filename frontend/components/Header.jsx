import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>STXN </span> | 
        </h1>
        <p className={headerStyles.description}>The right place to be at</p>
    </div>
  )
}

export default Header