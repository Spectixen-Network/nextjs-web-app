import headerStyles from '../styles/Header.module.css'

const Header = ({pageName}) => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>STXN </span> | {pageName}
        </h1>
        <p className={headerStyles.description}>The right place to be at</p>
    </div>
  )
}

export default Header