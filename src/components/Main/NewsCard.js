import React from 'react';
import './NewsCard.css';

const NewsCard = ({ title, description, imageUrl, link }) => {
    return (
        <div className="news-card">
            <img src={imageUrl} alt={title} className="news-image" />
            <div className="news-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">Lire plus</a>
            </div>
        </div>
    );
};

export default NewsCard;