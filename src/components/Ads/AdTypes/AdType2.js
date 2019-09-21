import React from 'react';
import styles from '../ads.module.css'

const AdType2 = () => {
    return (
        <div className="row mx-5">
            <div className={`col-md-6`}>
                <div className={`${styles.bgAd2Img1} h-100 p-2 rounded`}>
                    <h4>IT'S TIME FOR A<br /> WORK HOLIDAY</h4>
                    <h4 style={{fontWeight:"bold"}}>PRIVATE VILLAS AT</h4>
                    <h1  style={{fontWeight:"bolder"}}>FLAT $399</h1>
                    <h4 style={{fontWeight:"bold"}}>19 - 24 TH SEPTEMBER</h4>    
                </div>
            </div>
            <div className={`col-md-6`}>
                <div className={`${styles.bgAd2Img2} p-2 h-100 rounded`}>
                <h1  style={{fontWeight:"bold"}}>Hotels</h1>
                <br />
                <h4>Taylor Made<br /> For You</h4>
                </div>
                
            </div>
        </div>
    )
}

export default AdType2;