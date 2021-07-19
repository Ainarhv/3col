import React,{useState} from 'react';
import './Button.css'
class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            col: this.props.color,
            bgColor: 'hsla(0, 0%, 100%, 0.75)'
        }
    }
    render() {
        return (
            <div className='bouton' style={{
                    color: this.state.col,
                    backgroundColor: this.state.bgColor
            }}  
                onMouseEnter={() => 
                    this.setState({col:'hsla(0, 0%, 100%, 0.75)', bgColor: this.props.color})}
                onMouseLeave={() => this.setState({col: this.props.color, bgColor: 'hsla(0, 0%, 100%, 0.75)'})}
            >
                <span>Learn More</span>
            </div>
        );
    }
}

export default Button;