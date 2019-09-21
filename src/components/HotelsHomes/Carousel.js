import React from 'react';

const Carousel = (props) =>{
    return (
        <div className="bd-example w-100">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">                    
                    {props.carousel.images.map((img,i)=>{
                        return (
                            <div className={`carousel-item ${i==0?'active':''}`}>
                                <img src={img} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{props.carousel.name}</h5>
                                    <p>{props.carousel.description}</p>
                                </div>
                            </div> 
                        )
                    })}
                                   
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;