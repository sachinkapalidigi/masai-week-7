import React from 'react';
import AdType1 from "./AdTypes/AdType1";
import AdType2 from './AdTypes/AdType2';

const Ads = () => {
    return (
        <div className="container-fluid p-5">
            <AdType1 />
            <br />
            <h2 className="mx-5 pl-3">Save Big. Travel Better.</h2>
            <br />
            <AdType2 />
        </div>
    )
}

export default Ads;