import React from "react";
import { createContext, useEffect, useState } from "react";
import { API_URL } from "../../config";

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(`${API_URL}/games`);
      const data = await response.json();
      setGames(data);
    };
    fetchGames();
  }, []);
  return (
    <GameContext.Provider value={{ games }}>{children}</GameContext.Provider>
  );
};

export default GameProvider;
