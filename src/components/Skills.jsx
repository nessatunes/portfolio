import React from "react";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import { SiTypescript, SiPostgresql, SiBootstrap } from "react-icons/si";

function Skills() {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="skills"
        className="flex-grow flex flex-col p-8 text-center bg-gradient-to-r from-indigo-950 via-blue-950 to-gray-900"
      >
        <h2 className="text-2xl font-bold mb-4 text-white p-5">
          Estudando as Tecnologias
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center text-white p-5 gap-6">
          <div className="flex flex-col items-center m-10">
            <DiHtml5 size={40} className="text-red-500" />
            <p className="mt-2">HTML</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <DiCss3 size={40} className="text-blue-500" />
            <p className="mt-2">CSS</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <DiJavascript1 size={40} className="text-yellow-500" />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <FaNodeJs size={40} className="text-green-500" />
            <p className="mt-2">Node.js</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <FaReact size={40} className="text-blue-500" />
            <p className="mt-2">React</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <FaReact size={40} className="text-cyan-500" />
            <p className="mt-2">React Native</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <DiGit size={40} className="text-orange-500" />
            <p className="mt-2">Git</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <DiGithubBadge size={40} className="text-black" />
            <p className="mt-2">GitHub</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <SiTypescript size={40} className="text-blue-500" />
            <p className="mt-2">TypeScript</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <SiTailwindcss size={40} className="text-teal-500" />
            <p className="mt-2">Tailwind</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <SiMongodb size={40} className="text-green-700" />
            <p className="mt-2">MongoDB</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <FaDocker size={40} className="text-blue-500" />
            <p className="mt-2">Docker</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <SiPostgresql size={40} className="text-blue-700" />
            <p className="mt-2">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center m-10">
            <SiBootstrap size={40} className="text-purple-700" />
            <p className="mt-2">Bootstrap</p>
          </div>
        </div>
      </section>
      <footer className="w-full h-20 flex-shrink-0 flex items-center justify-center bg-gray-900 text-white">
        <div>
          <p>Feito com ❤ | Vanessa Antunes | 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default Skills;
