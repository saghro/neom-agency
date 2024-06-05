import React from 'react';
import NewsCard from './NewsCard';
import './NewsSection.css';
import url_to_image_3 from '../../images/acc2.jpeg';
import url_to_image_2 from '../../images/acc3.jpeg';
import url_to_image_1 from '../../images/acc1.jpg';

const newsData = [
    {
        title: 'Croissance du chiffre d’affaires au premier trimestre 2024',
        description: 'Croissance du chiffre d’affaires au premier trimestre 2024 : +2,6%, dont +2,4% organique',
        imageUrl: url_to_image_1,
        link: 'https://www.example.com/news1'
    },
    {
        title: 'Economcom lance une grande campagne de recrutement',
        description: 'Economcom lance une grande campagne de recrutement, une étape majeure de sa stratégie de croissance',
        imageUrl: url_to_image_2,
        link: 'https://www.example.com/news2'
    },
    {
        title: 'Economcom lance "Impact"',
        description: 'Economcom lance "Impact" : Un média digital témoignant de ses engagements en matière de RSE',
        imageUrl: url_to_image_3,
        link: 'https://www.example.com/news3'
    }
];

const NewsSection = () => {
    return (
        <div className="news-section">
            <h2>Actualités</h2>
            <div className="news-grid">
                {newsData.map((news, index) => (
                    <NewsCard
                        key={index}
                        title={news.title}
                        description={news.description}
                        imageUrl={news.imageUrl}
                        link={news.link}
                    />
                ))}
            </div>
            <button className="view-all">Voir tout</button>
        </div>
    );
};

export default NewsSection;