import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            // position: '',
            // top:1
            // overflow: 'scroll',
            // border: '2px solid black',
            // height: '100%',
            

        }}>

            {props.children}

        </div>
    )
}

export default Scroll;