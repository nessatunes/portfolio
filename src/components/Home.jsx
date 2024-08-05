import React from "react";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex flex-grow items-center justify-center bg-gradient-to-r from-indigo-950 via-blue-950 to-gray-900">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center text-white h-full">
          <div className="flex flex-col justify-center items-center text-white lg:w-1/2 p-4">
            <div>
              <img
                className="w-80 h-80 rounded-full"
                src="src/assets/vanessa.jpg"
                alt="foto de perfil"
              />
            </div>
            <h1 className="text-4xl font-bold mt-10">VANESSA ANTUNES</h1>
            <h2 className="text-4xl font-bold">Desenvolvedora Fullstack</h2>
          </div>
          <div className="max-w-2xl mx-auto p-4 lg:w-1/2 text-justify">
            <h2 className="text-3xl font-bold mb-6 text-center">Sobre Mim</h2>
            <p className="text-lg mt-4 mb-6">
              Olá me chamo Vanessa, sou uma profissional de 42 anos com
              experiência nas áreas administrativa e de recursos humanos. Nos
              últimos 5 anos, tenho trabalhado de forma autônoma, o que me
              permitiu desenvolver habilidades de gestão e empreendedorismo. Há
              6 meses, decidi seguir uma paixão antiga e comecei a estudar
              programação. Sempre fui fascinada pelo mundo da tecnologia e pela
              capacidade de criar soluções inovadoras. Minha natureza
              comunicativa e curiosa me ajuda a aprender e a me adaptar a novos
              desafios, mesmo quando eles me assustam inicialmente. Nada me
              impede de seguir em frente e buscar constantemente novos
              conhecimentos. Acredito que minha combinação de experiência em
              administração e RH, junto com minha recente imersão na
              programação, me proporciona uma perspectiva única e valiosa. Estou
              animada para continuar essa jornada e explorar novas oportunidades
              no desenvolvimento de software.
            </p>
            <div className="text-center mt-10">
              <a
                href="VanessaAntunes.pdf"
                download
                className="px-4 py-2 bg-blue-500 text-white rounded-md inline-block "
              >
                Download Curriculo
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full h-20 flex items-center justify-center bg-gray-900 text-white">
        <div>
          <p>Feito com ❤ | Vanessa Antunes | 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
