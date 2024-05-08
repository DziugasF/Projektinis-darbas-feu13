import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";

const ComputerDetails = () => {
  const { id } = useParams();
  const [computer, setComputer] = useState(null);
  const [computerIsDeleted, setComputerIsDeleted] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const computerRes = await fetch(`${API_URL}/computers/${id}`);
      const computerData = await computerRes.json();

      setComputer(computerData);
    };
    getData();
  }, [id]);

  if (!computer) {
    return <p>Loading...</p>;
  }

  const { name, price, image, type, description } = computer;

  const computerDeleteHandler = () => {
    fetch(`${API_URL}/computers/${id}`, {
      method: "DELETE",
    });
    setComputerIsDeleted(true);
  };
  if (computerIsDeleted) {
    return (
      <div>
        <h2>Computer was removed</h2>
        <Link to="/computers">Go back to Store!</Link>
      </div>
    );
  }
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row items-center border-2 p-5 rounded-5">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="img" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto">
              {name}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              Price: {price} $
            </div>
            <p className="mb-8">Type: {type}</p>
            <p className="mb-8">{description}</p>
            <button className="bg-black py-4 px-8 text-white border-[2px] w-[200px]">
              Buy now!
            </button>
            <Link to="/computers">
              <button className="bg-black py-4 px-8 text-white border-[2px] w-[200px]">
                Go back to store!
              </button>
            </Link>
          </div>
        </div>
        <div className="computer-controls p-8 flex flex-col justify-center items-center">
          only for admins
          <button
            onClick={computerDeleteHandler}
            className="text-xl text-red-500 font-medium mb-6"
          >
            Remove computer
          </button>
          <Link
            className="text-xl text-blue-500 font-medium mb-6 no-underline"
            to={`/edit-computer/${id}`}
          >
            Edit Computer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComputerDetails;
