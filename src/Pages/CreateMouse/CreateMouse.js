import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import MouseForm from "../../Components/MouseForm/MouseForm";

const CreateMouse = () => {
  const navigate = useNavigate();
  const newMouseHandler = async (newMouse) => {
    const res = await fetch(`${API_URL}/mouses`, {
      method: "POST",
      body: JSON.stringify(newMouse),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const createdMouse = await res.json();
    navigate(`/mouses/${createdMouse.id}`);
  };
  return (
    <div>
      <h1>Create new Mouse</h1>
      <MouseForm onMouseSubmit={newMouseHandler} />
    </div>
  );
};

export default CreateMouse;
