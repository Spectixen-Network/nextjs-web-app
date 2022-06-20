import Link from 'next/link'
import { navLinks } from "./src/NavLinks.js";
import Image from 'next/image'

import navStyles from '../styles/Nav.module.css'


const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <Image src="/logo.png" alt="STXN LOGO" width={50} height={50} />
        <p className={navStyles.logoName}>Spectixen Network </p> 
        <p> |</p>
            {navLinks.map((link, index) => {
            return (
                <div className={navStyles.links}>
                    <Link href={link.path}>
                        <p className={navStyles.link} key={index}>{link.name} </p> 
                    </Link>
                </div>
            );
            })}
    </nav>
  )
}

export default Nav