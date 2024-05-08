import { useContext } from "react";
import { MouseContext } from "../../Components/MouseContext/MouseContext";
import Mouse from "../../Components/Mouse/Mouse";

const MouseList = () => {
  const { mouses } = useContext(MouseContext);
  const filteredMouses = mouses.filter((item) => {
    return item.type === "new";
  });
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredMouses.map((mouse) => {
              return <Mouse mouse={mouse} key={mouse.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MouseList;
