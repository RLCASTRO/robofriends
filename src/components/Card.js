import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc' >
            {/* {this url is an api that returns randon robots based on the paremeters you pass after the /} */}
            <img src={`https://robohash.org/${id}?set=set3`} alt="robots" />
            <div>
                <h2> {name} </h2>
                <p> {email} </p>
            </div>

        </div>

    );
}

export default Card; 