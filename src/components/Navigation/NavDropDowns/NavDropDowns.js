import React from 'react';

const NavDropDown = (props) => {
    return (
        <div style={{width:"150px"}} className="justify-content-center">
            <button type="button" class="btn btn-sm btn-light text-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.name}
            </button>
            <div class="dropdown-menu">
                {props.areas.map(area=>{
                    return (<a class="dropdown-item" href="#">{area}</a>)
                })}
            </div>
        </div>
    )
}

export default NavDropDown;