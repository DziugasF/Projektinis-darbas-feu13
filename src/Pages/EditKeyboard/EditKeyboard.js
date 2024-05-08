import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../config";
import KeyboardForm from "../../Components/KeyboardForm/KeyboardForm";

const EditKeyboard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [keyboard, setKeyboard] = useState(null);

  useEffect(() => {
    const getKeyboard = async () => {
      const res = await fetch(`${API_URL}/keyboards/${id}`);
      const data = await res.json();

      setKeyboard(data);
    };
    getKeyboard();
  }, [id]);

  const updateKeyboardHandler = async (keyboardData) => {
    const res = await fetch(`${API_URL}/keyboards/${keyboardData.id}`, {
      method: "PUT",
      body: JSON.stringify(keyboardData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const updatedKeyboard = await res.json();
    navigate("/keyboards/" + updatedKeyboard.id);
  };
  return (
    <div>
      <h1>Edit Keyboard</h1>

      {keyboard ? (
        <KeyboardForm
          onKeyboardSubmit={updateKeyboardHandler}
          editKeyboardData={keyboard}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditKeyboard;
