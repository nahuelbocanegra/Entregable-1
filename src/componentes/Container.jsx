import React from 'react';
import Card from './Card';
import Button from './Button';
import { useState } from 'react'
import QuoteBox from '../QuoteBox.json'
const Container = () => {
    const color = ["#395144", "#AA8B56", "#CF0A0A", "#00F5FF", "#98A8F8", "#FF8787", "#905E96", "#FF577F", "#C7F2A4"]
    const [colorRandom, setColorRandom] = useState(Math.floor(Math.random() * color.length))
    const [random, setRandom] = useState(Math.floor(Math.random() * QuoteBox.length))
    const indexRandom = () => {
        setRandom(Math.floor(Math.random() * QuoteBox.length))
        setColorRandom(Math.floor(Math.random()*color.length))
    }
    document.body.style =`background-color:${color[colorRandom]};`
   
    return (
        <div className='container'>
            <Card random={random} textcolor={color[colorRandom]}></Card>
            <Button indexRandom={indexRandom} textcolor={color[colorRandom]}></Button>
        </div>
    );
};

export default Container;