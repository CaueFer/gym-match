"use client";

import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="w-full h-[70vh] px-14 py-[15vh] container-size">
      <div className="flex flex-rol w-full relative">
        <div className="flex flex-col lg:flex-row justify-between w-1/2">
          <div>
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl leading-10 mx-auto text-start relative bg-clip-text text-transparent bg-gradient-to-br from-black to-primaryPurple dark:from-neutral-800 dark:via-white dark:to-white">
              Encontre o personal <br />
              perfeito para <span className="text-primaryPurple ">atingir</span>
              <br />
              seus <span className="text-primaryPurple ">objetivos</span>
            </h1>
            <div className="mt-8">
              <h2 className="font-poppins text-20 sm:text-xl md:text-xl lg:text-2xl font-bold text-left">
                Treine com especialistas - Teste grátis agora!
              </h2>
              <div className="font-poppins text-sm lg:text-lg text-gray mt-2 text-left">
                <p>
                  O suporte que você precisa para transformar seu corpo.
                  <br />
                  Encontre o personal que dê match com você hoje mesmo!
                </p>
                <div
                  className="flex flex-col sm:flex-row justify-start gap-4"
                  style={{ marginTop: "24px" }}
                >
                  <Button variant="outlined">Saiba como funciona</Button>

                  <Button
                    variant="gradient"
                    color="white"
                    className="bg-primaryPurple text-white"
                  >
                    Quero encontrar meu personal
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-1/2 h-full -mt-6">
            <Image
              src="/assets/images/hero-coach-image.png"
              alt="hero-coach-image"
              width={550}
              height={500}
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
