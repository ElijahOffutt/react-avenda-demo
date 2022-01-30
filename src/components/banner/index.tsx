import React from "react";
import styles from './index.module.scss'

export default function Banner(props: any){
    return (
        <div className={`${styles.pageBanner} flex place-content-center py-${ props.short ? '10' : '15'}`}>
            <h1>{props.text}</h1>
        </div>
    )
}