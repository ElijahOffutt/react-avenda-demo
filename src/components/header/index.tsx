import React from "react";
import MainLink from './link'
import Logo from './logo'

import styles from './index.module.scss'

export const Header: React.FC = () => {

  let links = require('./links.json')

  return (
    <header className={`${styles.mainHeader} fixed bg-white shadow-lg mb- p-5`}>
      <nav className="flex justify-between align-center">
        <Logo />
        { links.map( (link : any) => ( <MainLink meta={link} /> ) ) }
      </nav>
    </header>
  );
};
