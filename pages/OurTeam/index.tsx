import React from "react";
import PublicLayout from "src/layouts/public";
// import Banner from '@components/banner'
// import Jump from '@components/banner/jump'
import styles from './index.module.scss'

export default function OurTeam (){

    let items = require('./data.json')

    return (
        <PublicLayout>
            {/* <Banner text={'Our Team'} short={true} image={'linkToImage'} /> */}
            {/* <Jump items={items.jumps} /> */}

            <div className={`${styles.ourTeam}`}>
                <div style={{width: '1050px'}} className="ourTeamContainer mx-auto">
                    <h2>Our world-class team of innovators is comprised of experts in Urology, Artificial Intelligence (AI), and Medical Devices.</h2>
                    <h3 className={`${styles.ourTeamHeading}`}>Leadership</h3>
                    <div className="flex">
                        { items.staff.map((item:any) =>(<div className="columns-4">
                            sample
                        </div>))}
                    </div>
                </div>
            </div>
        </PublicLayout>
    )
}