import React from 'react';
import QuoteBox from '../QuoteBox.json'
const Card = ( { random,textcolor} ) => {
   
    return (
        <div className='Card'>
            <div className='container-card' style={{color:textcolor}}>
                <div>
                  <i class='bx bxs-quote-alt-left'></i>
                  <p>{QuoteBox[random].quote}</p>
                </div>
                
                <h1>{QuoteBox[random].author}</h1>
           </div> 
        </div>
    );
};

export default Card;