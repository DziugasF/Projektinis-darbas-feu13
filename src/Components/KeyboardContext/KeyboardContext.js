import { createContext, useEffect, useState } from "react";
import { API_URL } from "../../config";

export const KeyboardContext = createContext();

const KeyboardProvider = ({ children }) => {
  const [keyboards, setKeyboards] = useState([]);
  useEffect(() => {
    const fetchKeyboards = async () => {
      const response = await fetch(`${API_URL}/keyboards`);
      const data = await response.json();
      setKeyboards(data);
    };
    fetchKeyboards();
  }, []);
  return (
    <KeyboardContext.Provider value={{ keyboards }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export default KeyboardProvider;
