import React from 'react';

const Button = ({indexRandom,textcolor}) => {
    return (
        <div className='container-button'>
            <button onClick={indexRandom} style={{ backgroundColor: textcolor }}>
                <i className='bx bx-right-arrow-alt'></i>
            </button>
        </div>
    );
};

export default Button;