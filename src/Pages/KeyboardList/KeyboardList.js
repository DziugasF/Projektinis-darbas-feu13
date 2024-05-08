import React from "react";
import { useContext } from "react";
import { KeyboardContext } from "../../Components/KeyboardContext/KeyboardContext";
import Keyboard from "../../Components/Keyboard/Keyboard";

const KeyboardList = () => {
  const { keyboards } = useContext(KeyboardContext);
  const filteredKeyboards = keyboards.filter((item) => {
    return item.type === "new";
  });
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredKeyboards.map((keyboard) => {
              return <Keyboard keyboard={keyboard} key={keyboard.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyboardList;
