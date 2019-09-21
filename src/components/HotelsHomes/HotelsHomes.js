import React from 'react';
import Carousel from './Carousel'

class HotelHomes extends React.Component {
    constructor(){
        super();
        this.state = {
            items : [
                {
                    id:"item_1",
                    name: "Town House",
                    description : "Based on the needs of the millennial traveller",
                    image : "https://lorempixel.com/output/business-q-c-100-100-6.jpg",
                    carousel: {
                        id:"cl_1",
                        name : "Your Friendly Neighbourhood Hotel",
                        description : "ONO Townhouse has every single element re-engineered to deliver higher quality and better value",
                        images : ['https://lorempixel.com/output/city-q-c-1080-500-3.jpg','https://lorempixel.com/output/city-q-c-1080-500-7.jpg','https://lorempixel.com/output/city-q-c-1080-500-2.jpg']
                    }
                },
                {
                    id:"item_2",
                    name: "ONO Home",
                    description : "Villas & Apartments with extra space & privacy",
                    image : "https://lorempixel.com/output/animals-q-c-100-100-4.jpg",
                    carousel: {
                        id:"cl_2",
                        name : "Feels like Home",
                        description : "A villa on a beech ,a savy studio apartment, find your perfect space to ONO home",
                        images : ['https://lorempixel.com/output/city-q-c-1080-500-8.jpg','https://lorempixel.com/output/city-q-c-1080-500-7.jpg','https://lorempixel.com/output/city-q-c-1080-500-2.jpg']
                    }
                },
                {
                    id:"item_3",
                    name: "Capital O",
                    description : "Comfortable stays curated for our elite guests",
                    image : "https://lorempixel.com/output/technics-q-c-100-100-1.jpg",
                    carousel: {
                        id:"cl_3",
                        name : "Premium Stays in great locations.",
                        description : "Designated to connect ONO's business & leisure with premium hotel partners that best suit their needs.",
                        images : ['https://lorempixel.com/output/people-q-c-1080-500-1.jpg','https://lorempixel.com/output/city-q-c-1080-500-7.jpg','https://lorempixel.com/output/city-q-c-1080-500-2.jpg']
                    }
                },
                {
                    id:"item_4",
                    name: "Silver Key",
                    description : "Executive apartments with stylish interiors",
                    image : "https://lorempixel.com/output/food-q-c-100-100-7.jpg",
                    carousel: {
                        id:"cl_4",
                        name : "An Executive Stay",
                        description : "Executive apartments with stylish interiors and the comfort of home ,minus the rules and rates of hotel",
                        images : ['https://lorempixel.com/output/people-q-c-1080-500-4.jpg','https://lorempixel.com/output/city-q-c-1080-500-7.jpg','https://lorempixel.com/output/city-q-c-1080-500-2.jpg']
                    }
                }
            ],
            hoverIndex : 0,
        }
        this.handleCarouselChange.bind(this);
    }

    handleCarouselChange(index){
        this.setState({
            hoverIndex:index
        })
    } 

    render() {

        return (
            <div className="container-fluid px-5">
                <h2 className="px-5 my-3">ONO Hotels and Homes</h2>                
                <div className="row px-5">
                    <div className="col-md-5">
                        {this.state.items.map((item,i)=>{
                            return (
                                <div onMouseEnter={()=>{this.handleCarouselChange(i)}} className={`row py-3 ${i==this.state.hoverIndex?'border rounded border-danger':''}`}>
                                    <div className="col-3 text-center">
                                        <img src={item.image} className="rounded rounded-circle" width="100px" height="100px" alt="..." />
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="col-9">
                                        <p>{item.description}</p>
                                        <p style={{color:"red",fontWeight:"bold"}}>Explore {item.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className="col-md-7">
                        <Carousel carousel={this.state.items[this.state.hoverIndex].carousel} />
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelHomes;