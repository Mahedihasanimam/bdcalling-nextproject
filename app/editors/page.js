import React from "react";
import Hero from "../(components)/(homeComponents)/page";
import Allwork from "../(components)/(homeComponents)/work/page";
import Process from "../(components)/(homeComponents)/process/pagel";
import Form from "./editorForm/page";

const Editors = () => {
  return (
    <div>
      <Hero />
      <Form/>
      <Allwork />
      <Process />
    </div>
  );
};

export default Editors;
