import React from "react";
import Link from "next/link";

import styles from './index.module.scss'

export const Footer: React.FC = () => {
  let links = require('./links.json')
  return (
    <div className={`${styles.mainFooter}`}>
      <div className="mainFooterContent">
        <div className="flex">
          <div className="footerLogo"></div>
        </div>
        <div className="divider" />
        <h5>Follow Us</h5><br />
        <p><a href="">@avendahealth</a> or <a href="">LinkIn</a></p>
        <div className="flex justify-between align-end">
          <div className="left">
            <span>&copy;2020 Avenda Health Inc.</span> <br />
            <p>
              {links.map((link: any) => (
                <Link href={link.path}>
                  <a>{link.text}</a>
                </Link>
              ))}
            </p>
          </div>
          <div className="right">
            <p>Web Dev by <a href="https://www.linkedin.com/in/witheringking/">Elijah Offutt</a>, for React Demonstration purposes only.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
