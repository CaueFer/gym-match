"use client";

import { Button } from "@material-tailwind/react";
import { ArrowRight } from "lucide-react";
import React from "react";

function CopySection() {
  return (
    <section className="bg-gradient-to-tl from-primaryPurple to-darkPrimaryPurple py-14 md:py-16 lg:py-20 mx-auto w-full relative">
      <div className="container mx-auto py-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center">
          <span className="text-sm font-light text-gray-200 mb-2 block">
            GYM MATCH
          </span>
          <h2 className="text-4xl sm:text-5xl text-white font-semibold">
            Conexões Que Transformam
          </h2>
          <p className="text-xl max-w-xl text-white mt-4 mb-6">
            Faça match com o personal ideal ou encontre alunos em busca do seu
            conhecimento. Planeje treinos, gerencie sua agenda e foque no que
            importa: resultados.
          </p>
          <Button className="text-md flex flex-row shadow-2xl">
            Experimente grátis <ArrowRight className="ml-2 text-md" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CopySection;
