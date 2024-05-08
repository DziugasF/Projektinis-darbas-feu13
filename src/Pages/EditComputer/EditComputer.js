import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../config";
import ComputerForm from "../../Components/ComputerForm/ComputerForm";

const EditComputer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [computer, setComputer] = useState(null);

  useEffect(() => {
    const getComputer = async () => {
      const res = await fetch(`${API_URL}/computers/${id}`);
      const data = await res.json();

      setComputer(data);
    };
    getComputer();
  }, [id]);

  const updateComputerHandler = async (computerData) => {
    const res = await fetch(`${API_URL}/computers/${computerData.id}`, {
      method: "PUT",
      body: JSON.stringify(computerData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const updatedComputer = await res.json();
    navigate("/computers/" + updatedComputer.id);
  };
  return (
    <div>
      <h1>Edit Computer</h1>

      {computer ? (
        <ComputerForm
          onComputerSubmit={updateComputerHandler}
          editComputerData={computer}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditComputer;
