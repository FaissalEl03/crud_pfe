import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [prix, setPrix] = useState("");
  const [type, setType] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3030/users/${id}`).then((res) => {   {/*hadi*/}
      setName(res.data.name);
      setPrix(res.data.prix);
      setType(res.data.type);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    prix: prix,
    type: type,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Details des produits</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Entrer le nom du produit"
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
          type="type"
          placeholder="Entrer le type"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE Produit
        </button>
      </form>
    </div>
  );
}

export default Edit;