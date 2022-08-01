import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            position: '',
            top:1,
            overflow: 'scroll',
            // border: '2px solid black',
            height: '900px',
            

        }}>

            {props.children}

        </div>
    )
}

export default Scroll;