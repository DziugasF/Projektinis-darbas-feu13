import { createContext, useEffect, useState } from "react";
import { API_URL } from "../../config";

export const MouseContext = createContext();

const MouseProvider = ({ children }) => {
  const [mouses, setMouses] = useState([]);
  useEffect(() => {
    const fetchMouses = async () => {
      const response = await fetch(`${API_URL}/mouses`);
      const data = await response.json();
      setMouses(data);
    };
    fetchMouses();
  }, []);
  return (
    <MouseContext.Provider value={{ mouses }}>{children}</MouseContext.Provider>
  );
};

export default MouseProvider;
