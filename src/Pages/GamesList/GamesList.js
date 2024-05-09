import { useContext } from "react";
import { GameContext } from "../../Components/GameContext/GameContext";
import Game from "../../Components/Game/Game";

const GamesToBuy = () => {
  const { games } = useContext(GameContext);
  const filteredGames = games.filter((item) => {
    return item.type === "new";
  });
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredGames.map((game) => {
              return <Game game={game} key={game.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamesToBuy;
