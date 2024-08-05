import { useState } from "react";

export default function Fetch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    //Isso impedirá a atualização da página
    e.preventDefault();

    fetch("https://formcarry.com/s/dTFxU9OAFkz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        telefone: telefone,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>Obrigada por entrar em contato!</p>;
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <label htmlFor="name" className="block text-sm font-medium ">
        Nome
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
      />

      <label htmlFor="email" className="block text-sm font-medium">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
      />
      <label htmlFor="telefone" className="block text-sm font-medium">
        Whatsapp
      </label>
      <input
        id="telefone"
        type="tel"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
      />

      <label htmlFor="message" className="block text-sm font-medium">
        Message
      </label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
      >
        Enviar
      </button>
    </form>
  );
}
