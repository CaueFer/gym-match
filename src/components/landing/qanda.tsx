import React from "react";
import AccordionHome from "../ui/accordion-home";

function QandA() {
  return (
    <section className="w-full h-[70vh] px-14 py-[15vh] container-size">
      <div className="flex flex-col shadow-xl rounded-lg mx-20 p-10">
        <h2 className=" mb-4 font-normal text-4xl">Dúvidas frequentes</h2>

        <AccordionHome />
      </div>
    </section>
  );
}

export default QandA;
