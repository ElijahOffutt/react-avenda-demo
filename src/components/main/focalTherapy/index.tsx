import React from "react";

import styles from  './index.module.scss'

export default function FocalTherapy (){

    let columns = require('./cols.json')

    return (
        <div className={`${styles.focalTherapy}`}>
            <div>
                <h2>WE’VE BUILT A NEW WAY TO PERFORM FOCAL THERAPY</h2>
                <div />
                <p>Using only two needles — a laser, and sensor — a physician can ablate tissue with precision and monitor treatment progress in real-time. Treatments consist of three simple steps: plan, treat, and confirm.</p>
                <div className="flex">
                    {columns.map((col: any)=>( 
                        <div className="columns-4">
                            <img src="" />
                            <h3>{col.text}</h3>
                            <div />
                            <p>{col.message}</p>
                        </div> 
                    ))}
                </div>
                <button>Learn about the future of cancer treatment and planning.</button>
            </div>
        </div>
    )
}