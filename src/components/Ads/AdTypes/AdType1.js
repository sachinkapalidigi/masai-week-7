import React from 'react';
import styles from '../ads.module.css';

const AdType1 = () => {
    return (
        <div className={`${styles.backgroundAd1} row p-2 mx-5 my-2 rounded`}>
            <div className="col-md-6">

                <h1 style={{fontWeight:"bolder"}} className="float-right display-4">EXPLORE YOUR <br />HOMELAND</h1>
            </div>
            <div className="col-md-3 border-left border-dark">

                <h3 style={{fontWeight:"bold"}}>STARTING AT</h3>
                <h1 style={{fontWeight:"bolder"}} className="display-1">$599</h1>
            </div>
            <div className="col-md-3">
                <div className="my-5 p-2 border shadow w-50 bg-white">
                    <h2 style={{fontWeight:"bold"}} className="">Book Now</h2>
                </div>
            </div>
        </div>
    )
}

export default AdType1;