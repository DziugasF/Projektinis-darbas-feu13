import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import KeyboardForm from "../../Components/KeyboardForm/KeyboardForm";

const CreateKeyboard = () => {
  const navigate = useNavigate();
  const newKeyboardHandler = async (newKeyboard) => {
    const res = await fetch(`${API_URL}/keyboards`, {
      method: "POST",
      body: JSON.stringify(newKeyboard),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const createdKeyboard = await res.json();
    navigate(`/keyboards/${createdKeyboard.id}`);
  };
  return (
    <div>
      <h1>Create new Keyboard</h1>
      <KeyboardForm onKeyboardSubmit={newKeyboardHandler} />
    </div>
  );
};

export default CreateKeyboard;
