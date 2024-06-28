import React from 'react';
 
const images = [
  'ii1.jpg',
  'ii2.jpg',
  'ii3.png',
  'ii4.jpg',
  'ii5.jpg',
  'ii6.jpg',
  'ii7.jpg',
  'ii8.jpg',
  'ii9.png',
  'ii10.jpg',
  'ii11.jpg',
  'ii12.png',
];

const imageDescriptions = {
  'ii5.jpg': "Conception d'une application mobile",
  'ii3.png': "élaboration de la carte RMA",
  'ii4.jpg': "Elaboration du catalogue des produits",
  'ii6.jpg': "Conception des brochures d'ER-MAT",
  'ii12.png': "élaboration de communication pour RMA",
  'ii1.jpg': "Elaboration du rapport de AZ METAL",
  'ii8.jpg': "Conception pour les espaces de stockage TACBOX",
  'ii9.png': "Lancement de formation pour les débutant",
  'ii11.jpg': "Affiche publicitaire pour le petit rimeur",
  'ii10.jpg': "Conception de mock-up TacBox",
  'ii7.jpg': "Conception de couverture pour AZ matériaux",
};

const getRandomHeight = () => {
  const minHeight = 150;
  const maxHeight = 500;
  return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
};
 
const ImageGallery = () => {
  const columns = 3;
  const imageChunks = [];
  for (let i = 0; i < columns; i++) {
    imageChunks.push(images.slice(i * Math.ceil(images.length / columns), (i + 1) * Math.ceil(images.length / columns)));
  }
 
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4 mt-8">
      <h2 className="mb-4 text-5xl font-bold text-center" style={{ background: 'linear-gradient(to right, #A8D9E0, #C7A2CB, #6A71B3)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Notre Portfolio</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {imageChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="flex flex-col gap-4">
            {chunk.map((image, index) => (
              <div key={index} className="p-2 relative group">
                <img src={require(`./${image}`)} alt={`Gallery item ${index}`} className="w-64 md:w-80 lg:w-96 object-cover shadow-md" style={{ height: `${getRandomHeight()}px` }} />
                <div className="absolute inset-0 bg-gradient-to-br from-[#A8D9E0] via-[#C7A2CB] to-[#6A71B3] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <h4 className="text-white font-poppins transition-transform transform group-hover:scale-110 text-center">{imageDescriptions[image]}</h4>
                </div>
                <style jsx>
                  {`
                    .group:hover .absolute {
                      background: linear-gradient(116deg, #c7a2cb, #6a71b3, #a8d9e0);
                      background-size: 600% 600%;
                      animation: AnimationName 6s ease infinite;
                    }
 
                    @keyframes AnimationName {
                      0% { background-position: 0% 30%; }
                      50% { background-position: 100% 71%; }
                      100% { background-position: 0% 30%; }
                    }
                  `}
                </style>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default ImageGallery;
