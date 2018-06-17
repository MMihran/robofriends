import React from 'react';

const Scroll = (props) => {
    console.log(props)
    return (
        <div style={{overflowY: "scroll", border: "2px solid #2288cc", height: "800px"}}>
            {props.children}
        </div>
    )
}


export default Scroll;