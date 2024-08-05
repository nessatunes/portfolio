import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import Form from "./Fetch";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="contact"
        className="flex flex-grow flex-col items-center justify-center text-white bg-gradient-to-r from-indigo-950 via-blue-950 to-gray-900"
      >
        <div className="container max-w-2xl mx-auto mt-10 p-6 flex-col">
          <span className="size-10 ">Meus Contatos:</span>

          <div className="flex p-4 gap-4">
            <TfiEmail className="text-3xl hover:text-gray-400" />
            <p>E-mail: essatunes@gmail.com</p>
          </div>
          <div className="flex p-4 gap-4 mb-4">
            <FaLocationDot className="text-3xl hover:text-gray-400" />

            <p>Localização: Dois Vizinhos, Paraná - Brasil</p>
          </div>
        </div>

        <div className="container max-w-2xl mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Contato</h2>
          <Form />
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

export default Contact;
