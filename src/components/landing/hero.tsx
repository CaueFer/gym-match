"use client";

import { Button } from "@material-tailwind/react";
import React from "react";

function Hero() {
  return (
    <section className="w-full px-14 py-14">
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-start relative bg-clip-text text-transparent bg-gradient-to-b from-black via-gray-800 to-gray-800 dark:from-neutral-800 dark:via-white dark:to-white">
            Encontre o personal <br />
            perfeito para atingir <br />
            seus objetivos
          </h1>
          <p className="font-poppins text-sm sm:text-lg md:text-lg lg:text-lg text-gray mt-5">
            Conectamos você com os melhores profissionais.
          </p>
          <div className="mt-8">
            <h2 className="font-poppins text-20 sm:text-xl md:text-xl lg:text-2xl font-bold text-left">
              Treine com especialistas - Inscreva-se agora!
            </h2>
            <div className="font-poppins text-sm lg:text-lg text-gray mt-2 text-left">
              <p>
                O suporte que você precisa para transformar seu corpo.
                <br />
                Encontre seu personal ideal hoje mesmo!
              </p>
            </div>
            <div
              className="flex flex-col sm:flex-row justify-start gap-4"
              style={{ marginTop: "24px" }}
            >
              <Button variant="outlined">Saiba como funciona</Button>

              <Button
                variant="gradient"
                color="indigo"
                className="bg-primaryPurple"
              >
                Quero encontrar meu personal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
