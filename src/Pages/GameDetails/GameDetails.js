import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [gameIsDeleted, setGameIsDeleted] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const gameRes = await fetch(`${API_URL}/games/${id}`);
      const gameData = await gameRes.json();

      setGame(gameData);
    };
    getData();
  }, [id]);

  if (!game) {
    return <p>Loading...</p>;
  }

  const { name, price, releaseDate, ownedBy, developedBy, image, type } = game;

  const gameDeleteHandler = () => {
    fetch(`${API_URL}/games/${id}`, {
      method: "DELETE",
    });
    setGameIsDeleted(true);
  };
  if (gameIsDeleted) {
    return (
      <div>
        <h2>Game was removed</h2>
        <Link to="/games">Go back to Store!</Link>
      </div>
    );
  }
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row items-center border-2 p-5 rounded-5">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="img" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto">
              {name}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              Price: {price} $
            </div>
            <p className="mb-8">Type: {type}</p>
            <p className="mb-8">{releaseDate}</p>
            <p className="mb-8">{ownedBy}</p>
            <p className="mb-8">{developedBy}</p>

            <button className="bg-black py-4 px-8 text-white border-[2px] w-[200px]">
              Buy now!
            </button>
            <Link to="/games">
              <button className="bg-black py-4 px-8 text-white border-[2px] w-[200px]">
                Go back to store!
              </button>
            </Link>
          </div>
        </div>
        <div className="computer-controls p-8 flex flex-col justify-center items-center">
          only for admins
          <button
            onClick={gameDeleteHandler}
            className="text-xl text-red-500 font-medium mb-6"
          >
            Remove Game
          </button>
          <Link
            className="text-xl text-blue-500 font-medium mb-6 no-underline"
            to={`/edit-game/${id}`}
          >
            Edit Game
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
