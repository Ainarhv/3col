import React from 'react';
import './Card.css';
import Button from '../button/Button';

class Card extends React.Component{
    render(){
        return (
            <div className='container'>
            {this.props.cards.map(cards=>{
                return (
                    <div className='card' 
                    style={{
                        backgroundColor: cards.bg
                    }}
                    >
                        <img src={cards.logo}/>
                        <h1>{cards.title}</h1>
                        <p>{cards.text}</p>
                        <Button color={cards.bg} />
                    </div>
                )}
            )}
            </div>
        )
    }
}

export {Card};