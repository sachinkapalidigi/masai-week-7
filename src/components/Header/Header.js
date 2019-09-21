import React from 'react';
import styles from './header.module.css';

const Header = () => {

    return (
        <div className="container-fluid mx-0">
            <div className="float-left ml-5 mt-2">                
                <h1 style={{color:"red"}}>
                    <img src="https://img.icons8.com/doodle/48/000000/building--v2.png" />
                    ONO
                </h1>
            </div>
            <div className="float-right mr-3 mt-4 text-secondary">
                <h5>Login/SignUp</h5>
            </div>
        </div>
        
    )
}

export default Header;