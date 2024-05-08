import { Link } from "react-router-dom";

const Mouse = ({ mouse }) => {
  const { id, name, price, image, type, description } = mouse;
  return (
    <div>
      <Link to={`/mouses/${id}`}>
        <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
          <div className="w-full h-full flex justify-center items-center ">
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-300"
                src={image}
                alt=""
              />
            </div>
          </div>
          <div className="absolute top-6 -right-11 bg-red-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
      </Link>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">
          Category: {type}
        </div>
        <Link to={`/mouses/${id}`} className="no-underline group transition">
          <h2 className="font-semibold mb-1 capitalize text-black group-hover:scale-110 transition duration-300">
            {name}
          </h2>
        </Link>
        <h4 className="font-semibold">Price: {price} $</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Mouse;
