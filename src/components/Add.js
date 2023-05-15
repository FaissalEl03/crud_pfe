import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [prix, setPrix] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
    prix: prix,
    type: type,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3030/users", data).then(navigate("/")); {/*bdel hadi*/}
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Ajouter un produit</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Entrer le nom"
        />
        <input
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Entrer le prix"
        />
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Entrer le type "
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default Add;
