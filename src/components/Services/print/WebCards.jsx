import Card from '../../Card';
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import { AiOutlineInteraction } from "react-icons/ai";
import { RiCommunityLine } from "react-icons/ri";
import { BiAnalyse } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";

const WebCards = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
        <Card
          title="Rédaction, conception et planification de vos publications"
          description="Optimisez votre contenu pour une meilleure portée."
          icon={<FaPencilAlt />}
        />
        <Card
          title="Conception de vos stories Instagram & Facebook"
          description="Créez des stories captivantes et engageantes."
          icon={<HiOutlineSpeakerphone />}
        />
        <Card
          title="Interactions avec votre communauté"
          description="Engagez activement avec vos abonnés pour renforcer la fidélité."
          icon={<AiOutlineInteraction />}
        />
        <Card
          title="Gestion de votre e-réputation"
          description="Surveillez et améliorez la perception en ligne de votre marque."
          icon={<RiCommunityLine />}
        />
        <Card
          title="Reportings hebdomadaires/mensuels"
          description="Recevez des insights détaillés sur la performance de vos contenus."
          icon={<BiAnalyse />}
        />
        <Card
          title="Création et gestion de campagne publicitaires ciblées"
          description="Maximisez votre ROI avec des campagnes publicitaires précisément ciblées."
          icon={<MdOutlineCampaign />}
        />
        <Card
          title="Composition de votre stratégie de communication"
          description="Développez une stratégie de communication complète et intégrée."
          icon={<BsGraphUp />}
        />
      </div>
    </div>
  );
};

export default WebCards;