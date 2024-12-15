import { Activity, Clock, Dumbbell } from "lucide-react";
import React from "react";

function BenefSection() {
  return (
    <section className="bg-gray-100 py-14 md:py-16 lg:py-20 mx-auto w-full relative">
      <div className="container mx-auto relative">
        <div className=" mb-14">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="text-4xl md:text-5xl font-light">
              Conecte-se com o personal ideal para você
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <li className="flex flex-col items-start gap-1 text-star p-6">
              <Activity color="#7866f2" size={55} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Match personalizada e eficiente
              </h3>
              <p className="text-gray-600">
                No Gym Match, encontre personal trainers que se encaixam no seu
                estilo e objetivos, garantindo treinos únicos e personalizados
                para o seu perfil.
              </p>
            </li>
            <li className="flex flex-col items-start gap-1 text-start p-6">
              <Clock color="#7866f2" size={55} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Treine no seu horário
              </h3>
              <p className="text-gray-600">
                Conexão entre Alunos e Personal trainers sempre conectados.
                Treine em qualquer horário com o suporte de quem entende os seus
                objetivos.
              </p>
            </li>
            <li className="flex flex-col items-start gap-1 text-start p-6">
              <Dumbbell color="#7866f2" size={55} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Mais flexibilidade para treinar
              </h3>
              <p className="text-gray-600">
                Escolha quando e onde treinar com seu personal. No Gym Match,
                você tem total liberdade para montar seu plano de treino sem
                perder a qualidade.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BenefSection;
