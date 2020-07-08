import React from 'react';
import './Card.scss';

const Card = (props: any) => {
    const { children, title } = props;
    return (
        <div className='card'>
            <div className="header"><h2>{title}</h2></div>
            {children}
        </div>
    );
};

export default Card;
