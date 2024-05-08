import { createContext, useEffect, useState } from "react";
import { API_URL } from "../../config";

export const ComputerContext = createContext();

const ComputerProvider = ({ children }) => {
  const [computers, setComputers] = useState([]);
  useEffect(() => {
    const fetchComputers = async () => {
      const response = await fetch(`${API_URL}/computers`);
      const data = await response.json();
      setComputers(data);
    };
    fetchComputers();
  }, []);
  return (
    <ComputerContext.Provider value={{ computers }}>
      {children}
    </ComputerContext.Provider>
  );
};

export default ComputerProvider;
