    import React from 'react';
    import background from '../../../images/backgroundwebdev.png'; 
    import personPlaceholder from '../../../images/personwebdev1.png'; 
    import './button.css'
    const Hero = () => {
    return (
        <div
        className="flex flex-col lg:flex-row items-center justify-between p-8 bg-cover bg-center h-screen text-white font-poppins"
        style={{ backgroundImage: `url(${background})` }}
      >
   <div className="max-w-xl mb-8 lg:mb-0 text-center lg:text-left mx-auto" style={{ marginTop: '17vh' }}>
  <h1 className="text-4xl lg:text-6xl font-bold mb-4">Développement Web et Mobile</h1>
  <p className="text-lg lg:text-xl mb-8">
    Nous vous accompagnons dans le conseil, la mise en place, le suivi et l’optimisation
    des campagnes de référencement organique et payant pour réussir vos projets.
  </p>
  <button className="custom-button">Play a demo <span className="circle">&gt;</span></button>
</div>



        <div className="hidden lg:block lg:flex-shrink-0 lg:h-full mt-16">
          <img src={personPlaceholder} alt="Person holding a laptop" className="h-full object-cover" />
        </div>
      </div>
      
      
    );
    };

    export default Hero;