import React from 'react';


const Card = ({name, email, id}) => {
// const {name, email, id} = props
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc' >
            {/* {this url is an api that returns randon robots based on the paremeters you pass after the /} */}
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2> {name} </h2>
                <p> {email} </p>
            </div>

        </div>

    );
}









// import React, {Component} from 'react';
// import './Card.css';

// class Card extends Component {
//     render() {
//         return(
//             <h1>Hello</h1>
//         )
//     }
// }

export default Card; //export default exports only one prop.
//export can exports multiple props of the inner object and you have to destructure