import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../config";
import MouseForm from "../../Components/MouseForm/MouseForm";

const EditMouse = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mouse, setMouse] = useState(null);

  useEffect(() => {
    const getMouse = async () => {
      const res = await fetch(`${API_URL}/mouses/${id}`);
      const data = await res.json();

      setMouse(data);
    };
    getMouse();
  }, [id]);

  const updateMouseHandler = async (mouseData) => {
    const res = await fetch(`${API_URL}/mouses/${mouseData.id}`, {
      method: "PUT",
      body: JSON.stringify(mouseData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const updatedMouse = await res.json();
    navigate("/mouses/" + updatedMouse.id);
  };
  return (
    <div>
      <h1>Edit Mouse</h1>

      {mouse ? (
        <MouseForm onMouseSubmit={updateMouseHandler} editMouseData={mouse} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditMouse;
