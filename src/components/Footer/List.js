import React from 'react';

const List = (props) => {
    return (
        <div className="row border-bottom py-3 border-light">
            {props.list.map(item=>{
                return (<div className="col-md-2">{item}</div>)
            })}
        </div>
    )
}

export default List;