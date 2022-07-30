import React from 'react';

const Sticky = (props) => {
    return (
        <div style={{ 
            position: 'sticky', 
            top: '0',
            width: '100%',
            
            }}>

            {props.children}
        </div>
    );

}

export default Sticky;