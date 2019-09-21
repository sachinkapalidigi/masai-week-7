import React from 'react';
import styles from './searchbar.module.css';

const SearchBar = () => {

    return (
            <div className={styles.backgroundImg + " " + "container-fluid p-5"}>
                <div className="row justify-content-center">
                    <h2 className="text-white">World's fastest growing hotel chain</h2>
                </div>
                <div className="row">
                    <div className="container">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search By city,Hotel or Neighbourhood" />
                            <input type="date" class="form-control" />
                            <input type="date" class="form-control" />
                            <input type="text" class="form-control" placeholder="Recipient's username" />

                                <div class="input-group-append">
                                    <span class="input-group-text" className="btn btn-success" id="basic-addon2">Search</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        
export default SearchBar;