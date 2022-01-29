import React from "react";
// import Lines from '@components/lines'

import styles from './index.module.scss'

export default function Hero (){
    return (
        <div className={`${styles.mainHero} mx-auto`}>
            <div className={`${styles.whiteBack} pt-24 flex`}>
                <div className={`${styles.heroContent}`}>
                    <h2>Focal therapy made <i>easy.</i></h2>
                    <p>Simplifying treatment and preserving quality of life using AI</p>
                </div>
                {/* <Lines color={'colorHex'} /> */}
            </div>
        </div>
    )
}