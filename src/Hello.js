import React, {Component} from 'react'; //making the destructuring 
import './Hello.css'; //this will import the css file

class Hello extends Component{
    render() {
        return ( //If you want to return multiple HTML tags, embrace them with parenthesis () brackets
        <div className='f1 tc'>
            <h1>Hello World</h1>
            <p>{this.props.greeting}</p> {/* I'm adding the property to this object, now I can pass a parameter */}
        </div>
        )
    }
}

export default Hello;