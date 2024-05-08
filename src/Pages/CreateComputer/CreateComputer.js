import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import ComputerForm from "../../Components/ComputerForm/ComputerForm";

const CreateComputer = () => {
  const navigate = useNavigate();
  const newComputerHandler = async (newComputer) => {
    const res = await fetch(`${API_URL}/computers`, {
      method: "POST",
      body: JSON.stringify(newComputer),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const createdComputer = await res.json();
    navigate(`/computers/${createdComputer.id}`);
  };
  return (
    <div>
      <h1>Create new Computer</h1>
      <ComputerForm onComputerSubmit={newComputerHandler} />
    </div>
  );
};

export default CreateComputer;
