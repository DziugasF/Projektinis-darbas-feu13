import React from "react";
import GameForm from "../../Components/GameForm/GameForm";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const CreateGame = () => {
  const navigate = useNavigate();
  const newGameHandler = async (newGame) => {
    const res = await fetch(`${API_URL}/games/`, {
      method: "POST",
      body: JSON.stringify(newGame),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const createdGame = await res.json();
    navigate(`/games/${createdGame.id}`);
  };
  return (
    <div>
      <h1>Create new Game</h1>
      <GameForm onGameSubmit={newGameHandler} />
    </div>
  );
};

export default CreateGame;
