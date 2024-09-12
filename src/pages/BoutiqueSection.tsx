import BoutiqueCard from "../components/BoutiqueCard";
import { magasins } from "../utils/data";

function BoutiqueSection() {
  console.log(magasins);
  return (
    <div className="bg-gray-50 min-h-screen grid items-center">
      <span className="text-3xl justify-center text-center">
        Liste des Boutiques
      </span>
      <div className="flex items-center justify-center gap-2">
        {magasins.map((magasin) => (
          <BoutiqueCard key={magasin.id} data={magasin} />
        ))}
      </div>
    </div>
  );
}

export default BoutiqueSection;
