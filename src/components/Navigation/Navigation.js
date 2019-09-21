import React from 'react';
import styles from './navigation.module.css'
import NavDropDown from './NavDropDowns/NavDropDowns'

class Navigation extends React.Component{
    constructor(){
        super();
        this.state = {
            cities : [
                {
                    id:"ono_001",
                    name:"Bengaluru",
                    areas: ['Koramangala','Indranagar','MG Road','Kumarswamy Layout']
                },
                {
                    id:"ono_002",
                    name:"Mumbai",
                    areas:['Andheri East','Thane','Powai','Panvel','Borivali','Bandra']
                },
                {
                    id:"ono_003",
                    name:"Delhi",
                    areas:['Rohini','Saket','New Delhi','Preet Vihar']
                },
                {
                    id:"ono_004",
                    name:"Hyderabad",
                    areas:['Uppal','Madhapur','Secundarabad']
                }
            ]
        } 
    }


    render() {

        return (
            <div className="container-fluid">
            <div className="row bg-light px-5">
                <div className="btn-group">
                    
                {this.state.cities.map(city=>{
                    return (<NavDropDown 
                        name={city.name}
                        areas={city.areas}
                        key={city.id}
                    />)
                })}
            </div>
            </div>
            </div>
        )
    }
}

export default Navigation;