import React from 'react';
import List from './List';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            list : ['Hotels near me','Hotels in Goa','Hotels in Puri','Hotels in Mahabaleshwar','Hotels in Jaipur','Hotels in Shimla','Hotels in Manali','Hotels in Udaipur','Hotels in Mussoorie','Hotels in Pondicherry','Hotels in Delhi','Hotels in Mumbai','Hotels in Nainital','Hotels in Lonavala','Hotels in Munnar','Hotels in Bangalore','Hotels in Mysore','Hotels in Darjeeling','Hotels in Mount Abu','Hotels in Kodaikanal','Hotels in Hyderabad','Hotels in Pune','Hotels in Chandigarh','Hotels in Shirdi','Hotels in Agra','Hotels in Gangtok','Hotels in Coorg','Hotels in Chennai','Hotels in Tirupati','Hotels in Dalhousie','Hotels in Haridwar','Hotels in Kolkata','Hotels in Ahmedabad','Hotels in Shillong','Hotels in Rishikesh','Hotels in Varanasi','Hotels in Alibaug','Hotels in Mandarmoni','Hotels in Daman','Hotels in Yercaud','Hotels in Amritsar','Hotels in Madurai','Hotels in Coimbatore','Hotels in Kasauli','Hotels in Dehradun','Travel Guide','Blog','Coupons']
        }
    }

    render() {
        return (
            <div className="container-fluid py-3 bg-secondary">
                <div className="row border-bottom  px-5 border-light">
                    <h1 style={{fontWeight:"bolder"}} className="mr-5 text-white">ONO</h1>
                    <h4 style={{fontWeight:"bolder",lineHeight:"50px"}} className="mr-3 text-white">The World's Fastest Growing Hotel Chain</h4>
                </div>
                <div className="px-5">
                    <div className="row border-bottom py-3 border-light">
                        <div style={{color:"white"}} className="col-md-4 h-100 border-right border-light">
                            <p>Download The ONO app for exciting offers</p>
                            <br />
                            <br />
                            <br />
                            
                        </div>
                        <div style={{color:"white"}} className="col-md-4 h-100 border-right border-light">
                            <div className="row">
                                <div className="col-6">
                                    <p>About</p>
                                    <p>Teams/Careers</p>
                                    <p>Blogs</p>
                                </div>
                                <div className="col-6">
                                    <p>Support</p>
                                    <p>Official OYO Blog</p>
                                    <p>Press Kit</p>
                                </div>
                            </div>
                        </div>
                        <div style={{color:"white"}} className="col-md-4 h-100">
                            <p>Guest Policies</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
                <div className="px-5">
                    <div className="row border-bottom py-5 border-light">
                        <div className="col-md-4 text-center text-white">
                            <h3>ONO Townhouse</h3>
                            <p>Your Friendly Neighbourhood Hotel</p>
                        </div>
                        <div className="col-md-4 text-center text-white">
                            <h3>ONO Townhouse</h3>
                            <p>Your Friendly Neighbourhood Hotel</p>
                        </div>
                        <div className="col-md-4 text-center text-white">
                            <h3>ONO Townhouse</h3>
                            <p>Your Friendly Neighbourhood Hotel</p>
                        </div>
                    </div>
                </div>
                <div className="px-5 text-white">
                    <br />   
                    <h2>ONO near me</h2>                 
                    <List list={this.state.list} />                                           
                </div>
                <div className="px-5 py-3 text-white text-center">
                    2018-2019 © Ono Stays Private Limited                                          
                </div>
            </div>
        )
    }
}


export default Footer;