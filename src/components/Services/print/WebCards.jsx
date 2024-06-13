import Card from '../../Card';
import { MdPrint } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { BiSolidPackage } from "react-icons/bi";

const WebCards = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center my-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <Card
        title="Impressions Offset "
        description="Brochures, Catalogues , Magazines et Rapports"
        icon={<MdPrint  />}
      />
      <Card
        title="Impressions numériques "
        description=" Cartes visite , Flyers et Affiches personnalisées"
        icon={<AiFillLike />}
      />
      <Card
        title="Impressions packaging"
        description="Coffrets, Boîtes cadeau, Pochettes et Fonds de boîte"
        icon={<BiSolidPackage />}
      />
    </div>
    <button className="mt-8 px-8 py-3  bg-[#FFA288] border-2 hover:border-[#FFA288] text-white rounded-full hover:bg-white hover:text-[#FFA288] transition duration-300">
      Vous avez un Projet?
    </button>
  </div>
  );
};


export default WebCards;