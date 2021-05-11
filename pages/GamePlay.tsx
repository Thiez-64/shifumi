import SmallCard from "../Components/SmallCard";
import TallCard from "../Components/TallCard";
import Users from "../Components/Users";

function PlayerGame(): JSX.Element {
  const cardStone = { imgCard: "/Pierre.svg", colorCard: "bg-yellow-300" };
  const cardLeaf = { imgCard: "/Feuille.svg", colorCard: "bg-yellow-300" };
  const cardChisel = { imgCard: "/Ciseau.svg", colorCard: "bg-yellow-300" };
  const cardPlayedTall = { imgCard: "/Ciseau.svg", colorCard: "bg-yellow-300" };

  const cardBoot = { imgCard: "/shifumii.png", colorCard: "bg-yellow-900" };
  const cardBootTall = { imgCard: "/shifumii.png", colorCard: "bg-yellow-900" };

  const playerOne = {
    name: "Jean-Neymar",
    img: "/Bear.svg",
    color: "bg-indigo-500",
  };
  const playerTwo = {
    name: "Louis-Vianey",
    img: "/Alien.svg",
    color: "bg-green-500",
  };

  return (
    <div className="w-full h-full bg-gray-400">
      <Users {...playerTwo} />
      <div className="flex justify-around p-4">
        <SmallCard {...cardBoot} />
        <SmallCard {...cardBoot} />
        <SmallCard {...cardBoot} />
      </div>
      <div className="flex justify-around p-6">
        <TallCard {...cardBootTall} />
        <TallCard {...cardPlayedTall} />
      </div>
      <div className="flex justify-around p-4">
        <SmallCard {...cardStone} />
        <SmallCard {...cardLeaf} />
        <SmallCard {...cardChisel} />
      </div>
      <Users {...playerOne} />
    </div>
  );
}

export default PlayerGame;
