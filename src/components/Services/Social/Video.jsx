import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BiLogoGitlab } from 'react-icons/bi';
import { TiChartPie } from 'react-icons/ti';
import { MdMovieCreation, MdOutlineProductionQuantityLimits, MdOutlineCoPresent } from 'react-icons/md';
import { AiOutlineProduct } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';

const cards = [
  { id: 1, title: 'Création de votre logo', icon: <BiLogoGitlab className="text-color-[#A8D9E0]"  /> },
  { id: 2, title: 'Création de votre charte graphique', icon: <TiChartPie /> },
  { id: 3, title: 'Création de vos supports de papeterie', icon: <MdMovieCreation /> },
  { id: 4, title: 'Création de produits promotionnels personnalisés', icon: <MdOutlineProductionQuantityLimits /> },
  { id: 5, title: 'Élaboration de la conception de vos emballages', icon: <AiOutlineProduct /> },
  { id: 6, title: 'Création d\'image de couverture pour vos réseaux sociaux', icon: <MdOutlineCoPresent /> },
  { id: 7, title: 'Rédaction de vos éléments de langage', icon: <GrLanguage /> },
];

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gradient-to-r from-[#A8D9E0] via-[#6A71B3] to-[#C7A2CB] h-96 flex items-center justify-center p-3">
      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {cards.map(card => (
            <div key={card.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center h-56 flex flex-col justify-center items-center hover:bg-gradient-to-r from-[#A8D9E0] via-[#6A71B3] to-[#C7A2CB] transition duration-300">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;