import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import ComputerList from "./Pages/ComputerList/ComputerList";
import GamesToBuy from "./Pages/GamesToBuy/GamesToBuy";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contacts from "./Pages/Contacts/Contacts";
import ComputerDetails from "./Pages/ComputerDetails/ComputerDetails";
import CreateComputer from "./Pages/CreateComputer/CreateComputer";
import EditComputer from "./Pages/EditComputer/EditComputer";
import CreateGame from "./Pages/CreateGame/CreateGame";
import EditGame from "./Pages/EditGame/EditGame";
import GameDetails from "./Pages/GameDetails/GameDetails";
import CreatePages from "./Pages/CreatePages/CreatePages";
import KeyboardList from "./Pages/KeyboardList/KeyboardList";
import KeyboardDetails from "./Pages/KeyboardDetails/KeyboardDetails";
import CreateKeyboard from "./Pages/CreateKeyboard/CreateKeyboard";
import EditKeyboard from "./Pages/EditKeyboard/EditKeyboard";
import MouseList from "./Pages/MouseList/MouseList";
import MouseDetails from "./Pages/MouseDetails/MouseDetails";
import CreateMouse from "./Pages/CreateMouse/CreateMouse";
import EditMouse from "./Pages/EditMouse/EditMouse";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-pages" element={<CreatePages />} />
        <Route path="/computers" element={<ComputerList />} />
        <Route path="/computers/:id" element={<ComputerDetails />} />
        <Route path="/create-computer" element={<CreateComputer />} />
        <Route path="/edit-computer/:id" element={<EditComputer />} />
        <Route path="/games" element={<GamesToBuy />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/edit-game/:id" element={<EditGame />} />
        <Route path="/keyboards" element={<KeyboardList />} />
        <Route path="/keyboards/:id" element={<KeyboardDetails />} />
        <Route path="/create-keyboard" element={<CreateKeyboard />} />
        <Route path="/edit-keyboard/:id" element={<EditKeyboard />} />
        <Route path="/mouses" element={<MouseList />} />
        <Route path="/mouses/:id" element={<MouseDetails />} />
        <Route path="/create-mouse" element={<CreateMouse />} />
        <Route path="/edit-mouse/:id" element={<EditMouse />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
