import { FaPeopleRoof } from "react-icons/fa6";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";

import Card from '../Card';

const WebCards = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center my-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        title="Immersive learning"
        description="Immersive learning : Complétez votre formation avec des cas pratiques dans un environnement virtuel."
        icon={<FaPeopleRoof />}
      />
      <Card
        title="Cours en ligne"
        description="Grace à la visioconférence, nous vous offrons des formations en ligne incluant des outils collaboratifs."
        icon={<MdOutlinePermDeviceInformation />}
      />
      <Card
        title="Maintenance des sites web et des applications"
        description="Profitez des avantages des cours en ligne et présentiels adaptés à vos attentes et exigences. "
        icon={<HiComputerDesktop />}
      />
    </div>
    <button className="mt-8 px-8 py-3  bg-orange-500 border-2 hover:border-orange-500 text-white rounded-full hover:bg-white hover:text-orange-500 transition duration-300">
      Vous avez un Projet?
    </button>
  </div>
  );
};


export default WebCards;