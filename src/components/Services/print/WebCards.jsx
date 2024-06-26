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
      <h3 className="mb-4 text-5xl font-bold text-center" style={{ background: 'linear-gradient(to right, #A8D9E0, #C7A2CB, #6A71B3)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Nos Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
        <Card
          title="Rédaction, conception et planification de vos publications"
          description="La création du contenu de haute qualité et à fort impact répondant aux besoins changeants de votre audience."
          icon={<FaPencilAlt />}
        />
        <Card
          title="Conception de vos stories Instagram & Facebook"
          description="Des images percutantes, de vidéos captivantes et de contenus interactifs pour créer des postes, et stories dynamiques qui captivent instantanément votre audience."
          icon={<HiOutlineSpeakerphone />}
        />
        <Card
          title="Interactions avec votre communauté"
          description="Neom adopte une approche proactive et personnalisée, en encourageant les conversations authentiques et constructives qui favorisent la confiance et la loyauté envers votre marque."
          icon={<AiOutlineInteraction />}
        />
        <Card
          title="Gestion de votre e-réputation"
          description="Neom protége, renforce et promeut la réputation en ligne de votre entreprise à travers diverses stratégies proactives, afin de maintenir une présence digitale positive, et accroître la confiance des consommateurs."
          icon={<RiCommunityLine />}
        />
        <Card
          title="Reportings hebdomadaires/mensuels"
          description="Neom vous fournit des rapports détaillés incluent une analyse approfondie de (KPIs), en mettant en lumière les succès atteints, en identifiant les opportunités d'amélioration et en recommandant des ajustements stratégiques basés sur les données collectées."
          icon={<BiAnalyse />}
        />
        <Card
          title="Création et gestion de campagne publicitaires ciblées"
          description="Maximiser l’efficacité de votre ROI, en créant des campagnes publicitaires ciblées avec des messages publicitaires personnalisés."
          icon={<MdOutlineCampaign />}
        />
        <Card
          title="Composition de votre stratégie de communication"
          description="Neom vous accompagne dans la mise en place d’un plan structuré et cohérent qui vise à optimiser votre visibilité auprès de votre audience cible."
          icon={<BsGraphUp />}
        />
      </div>
    </div>
  );
};

export default WebCards;