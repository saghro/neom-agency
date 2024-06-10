import { FaPaintBrush, FaLaptopCode, FaCog, FaCloudUploadAlt } from 'react-icons/fa';
import Card from '../Card';

const WebCards = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center my-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        title="UI/UX design"
        description="Un design attrayant et des visuels modernes et créatifs pour capter l’attention des visiteurs."
        icon={<FaPaintBrush />}
      />
      <Card
        title="Développement web et mobile"
        description="Après une analyse de l’ensemble de vos besoins, nous sélectionnons les outils les plus adaptés à vos objectifs."
        icon={<FaLaptopCode />}
      />
      <Card
        title="Maintenance des sites web et des applications"
        description="Correction des bugs, mettre à jour de nouvelles fonctionnalités, et surveillance de la sécurité."
        icon={<FaCog />}
      />
      <Card
        title="Déploiement"
        description="Déployer un site web par métier, par zone géographique, ou sur l’ensemble du système."
        icon={<FaCloudUploadAlt />}
      />
    </div>
    <button className="mt-8 px-8 py-3  bg-[#FFA288] border-2 hover:border-[#FFA288] text-white rounded-full hover:bg-white hover:text-[#FFA288] transition duration-300">
      Vous avez un Projet?
    </button>
  </div>
  );
};


export default WebCards;