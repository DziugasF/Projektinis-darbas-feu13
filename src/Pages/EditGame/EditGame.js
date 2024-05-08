import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../config";
import GameForm from "../../Components/GameForm/GameForm";

const EditGame = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const getGame = async () => {
      const res = await fetch(`${API_URL}/games/${id}`);
      const data = await res.json();

      setGame(data);
    };
    getGame();
  }, [id]);

  const updateGameHandler = async (gameData) => {
    const res = await fetch(`${API_URL}/games/${gameData.id}`, {
      method: "PUT",
      body: JSON.stringify(gameData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const updatedGame = await res.json();
    navigate("/games/" + updatedGame.id);
  };
  return (
    <div>
      <h1>Edit Game</h1>

      {game ? (
        <GameForm onGameSubmit={updateGameHandler} editGameData={game} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditGame;
