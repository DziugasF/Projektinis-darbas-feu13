import { useContext } from "react";
import { ComputerContext } from "../../Components/ComputerContext/ComputerContext";
import Computer from "../../Components/Computer/Computer";

const ComputerList = () => {
  const { computers } = useContext(ComputerContext);
  const filteredComputers = computers.filter((item) => {
    return item.type === "new";
  });
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredComputers.map((computer) => {
              return <Computer computer={computer} key={computer.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComputerList;
