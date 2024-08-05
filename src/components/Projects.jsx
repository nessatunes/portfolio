import React from "react";

function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-950 via-blue-950 to-gray-900">
      <section
        id="projects"
        className="flex flex-grow mt-10 items-center justify-center text-white "
      >
        <div className="max-2xl: mx-auto p-4 justify-center ">
          <h2 className="text-3xl font-bold mb-4 text-center">Projetos</h2>
          <p className="text-lg mb-10 text-center">
            Aqui estão alguns dos meus projetos construidos nas aulas:
          </p>
          <div className="grid md:grid-cols-3 gap-5">

            <div className=" justify-center text-center items-center max-w-xl h-auto     border rounded-lg p-5">
              <h2 className="mb-4">Projeto CodeBurger</h2>
              <img
                src="src/assets/codeburger.png"
                alt="img do projeto"
                className="h-60 w-auto rounded-lg"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-700"
              >
                <a
                  href="https://github.com/nessatunes/codeburger-interface"
                  target="_blank"
                >
                  Acessar
                </a>
              </button>
            </div>

            <div className=" justify-center text-center items-center max-w-xl h-auto     border rounded-lg p-5">
              <h2 className="mb-4">Projeto Elite Tracker</h2>
              <img
                src="src/assets/foto3.png"
                alt="img do projeto"
                className="h-60 w-auto rounded-lg"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-700"
              >
                <a
                  href="https://github.com/nessatunes/elite-tracker-frontend"
                  target="_blank"
                >
                  Acessar
                </a>
              </button>
            </div>

            <div className=" justify-center text-center items-center max-w-xl h-auto     border rounded-lg p-5">
              <h2 className="mb-4">Projeto DevBills</h2>
              <img
                src="src/assets/dasboard.png"
                alt="img do projeto"
                className="h-60 w-auto rounded-lg"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-700"
              >
                <a
                  href="https://github.com/nessatunes/devbills-front/tree/main"
                  target="_blank"
                >
                  Acessar
                </a>
              </button>
            </div>

            <div className=" justify-center text-center items-center max-w-xl h-auto     border rounded-lg p-5">
              <h2 className="mb-4">Projeto Money</h2>
              <img
                src="src/assets/banner.png"
                alt="img do projeto"
                className="h-60 w-auto rounded-lg"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-700"
              >
                <a
                  href="https://github.com/nessatunes/money-mobile"
                  target="_blank"
                >
                  Acessar
                </a>
              </button>
            </div>

            <div className=" justify-center text-center items-center max-w-xl h-auto     border rounded-lg p-5">
              <h2 className="mb-4">Projeto DevBurger</h2>
              <img
                src="src/assets/cardapio.jpg"
                alt="img do projeto"
                className="h-60 w-auto rounded-lg"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-700"
              >
                <a
                  href="https://github.com/nessatunes/Projeto-CardapioHamburgueria-SujeitoProgramador"
                  target="_blank"
                >
                  Acessar
                </a>
              </button>
            </div>

            <div className=" justify-center text-center items-center max-w-xl h-auto     border rounded-lg p-5">
              <h2 className="mb-4">Projeto Conversor de moedas</h2>
              <img
                src="src/assets/tela.png"
                alt="img do projeto"
                className="h-60 w-auto rounded-lg"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-700"
              >
                <a
                  href="https://github.com/nessatunes/Projeto1-Conversor-moedas-DevClub/tree/main"
                  target="_blank"
                >
                  Acessar
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full h-20 flex items-center justify-center bg-gray-900 text-white">
        <div>
          <p> Feito com ❤ | Vanessa Antunes | 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default Projects;
