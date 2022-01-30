import React from "react";
import Link from "next/link";
import Lines from "@components/lines";
import FooterLogo from "./footerLogo";

import styles from './index.module.scss'

export const Footer: React.FC = () => {
  let links = require('./links.json')
  return (
    <div className={`${styles.mainFooter} py-20 z-50`}>
      
      <div className={styles.footerGraphic}>
        <Lines color={'string'} />
      </div>

      <div style={{color: '#d6d6d6', fontSize: '.85em'}} className={`${styles.mainFooterContent} mx-auto`}>

        <FooterLogo />

        <div className="my-10" style={{backgroundColor: 'white', width: '100%', height: '1px'}} />
        
        <h5 style={{color: 'white', fontSize: '3em'}}>Follow Us</h5>
        
        <p style={{fontSize: '1.45em', color: 'white'}}><a href="">@avendahealth</a> or <a href="">LinkedIn</a></p> <br />
        
        <div className="mt-5 flex justify-between content-end">
          <div>

            <span>&copy;2020 Avenda Health Inc.</span> 
            
            <br />

            <p>
              {links.map((link: any) => (
                <Link href={link.path}>
                  <u style={{cursor: 'pointer'}}><a className="mr-3">{link.text}</a></u>
                </Link>
              ))}
            </p>

          </div>
          <div>

            <p>Web Dev by <u style={{cursor: 'pointer'}}><a href="https://www.linkedin.com/in/witheringking/">Elijah Offutt</a></u>, for React Demonstration purposes only.</p>
          
          </div>
        </div>
      </div>
    </div>
  );
};
