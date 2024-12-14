"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const AccordionHome = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-primaryPurple hover:!text-primaryPurple" : ""
          }`}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Como funciona o sistema de "match" com personal trainers?
        </AccordionHeader>
        <AccordionBody className="text-lg">
          O Gym Match utiliza um algoritmo inteligente para conectar alunos e
          personal trainers com base em objetivos, preferências de treino,
          localização e disponibilidade. Quando você se inscreve no aplicativo,
          preenche seu perfil com suas metas de fitness e preferências de
          treino. O sistema encontra os treinadores mais adequados, e você pode
          dar "match" com eles para começar a treinar juntos.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-primaryPurple hover:!text-primaryPurple" : ""
          }`}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Preciso de experiência prévia em academia para usar o Gym Match?
        </AccordionHeader>
        <AccordionBody className="text-lg">
          Não, o Gym Match é adequado tanto para iniciantes quanto para pessoas
          com experiência em treino. Os personal trainers disponíveis no app têm
          experiência em trabalhar com todos os níveis de condicionamento físico
          e podem adaptar os treinos para atender às suas necessidades, seja
          você um iniciante ou um atleta avançado.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-primaryPurple hover:!text-primaryPurple" : ""
          }`}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          O Gym Match oferece planos de treino personalizados?
        </AccordionHeader>
        <AccordionBody className="text-lg">
          Sim! Após o "match" com um personal trainer, você pode trabalhar junto
          com ele para criar um plano de treino personalizado, que será adaptado
          aos seus objetivos e necessidades. Os planos de treino podem incluir
          exercícios para perda de peso, ganho muscular, resistência, entre
          outros, e podem ser ajustados conforme seu progresso.
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default AccordionHome;
