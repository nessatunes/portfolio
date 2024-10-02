import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBars,
  faFolderOpen,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={faBars}
          className="text-4xl hover:text-gray-400"
        />
      </button>
      <section
        className={`
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          transition-transform duration-300 ease-in-out
          fixed md:static top-0 left-0 z-10
          w-64 md:w-80 h-screen
          text-white p-8 bg-gradient-to-r from-indigo-950 via-blue-950 to-gray-900
          flex flex-col
        `}
      >
        <div className="w-64 h-screen p-4 box-border">
          <div className="">
            <h1 className="text-center text-2xl mt-6 mb-3">Vanessa Antunes</h1>
            <h2 className="mb-6 text-center text-slate-300">
              Desenvolvedora Full Stack
            </h2>
          </div>
          <nav className="flex text-xl mt-8 mb-8 ">
            <ul className="flex flex-col w-full cursor-pointer">
              <li className="p-2">
                <button
                  onClick={() => {
                    navigate("/");
                    setIsOpen(false);
                  }}
                  className="w-full text-left hover:bg-gray-700 rounded"
                >
                  <FontAwesomeIcon icon={faHouse} className="mx-2 size-5 " />
                  Home
                </button>
              </li>

              <li className="p-2">
                <button
                  onClick={() => {
                    navigate("/skills");
                    setIsOpen(false);
                  }}
                  className="w-full text-left hover:bg-gray-700 rounded"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="mx-2 size-5"
                  />
                  Skills
                </button>
              </li>

              <li className="p-2">
                <button
                  onClick={() => {
                    navigate("/projects");
                    setIsOpen(false);
                  }}
                  className="w-full text-left hover:bg-gray-700 rounded"
                >
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="mx-2 size-5"
                  />
                  Projetos
                </button>
              </li>
            </ul>
          </nav>

          <div>
            <div className="flex justify-center">
              <span className="text-xl mt-8">Redes Sociais</span>
            </div>

            <div className="flex justify-center gap-4 p-4">
              <a
                href="https://github.com/Nessatunes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-4xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/dev-vanessa-antunes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-4xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://www.instagram.com/nessatuness/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-4xl hover:text-gray-400"
                />
              </a>
              <a
                href="https://wa.me/5546999290989"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-4xl hover:text-gray-400"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="justify-center gap-4 p-4 mb-32">
          <div className="flex p-4 gap-4">
            <TfiEmail className="text-3xl hover:text-gray-400" />
            <p>E-mail: essatunes@gmail.com</p>
          </div>
          <div className="flex p-4 gap-4 mb-4">
            <FaLocationDot className="text-3xl hover:text-gray-400" />
            <p>Localização: Dois Vizinhos, Paraná - Brasil</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
