import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

NewGameForm.propTypes = {
  addGame: PropTypes.func,
};

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextInput id="Title" label="Título:" value={title} setValue={setTitle} />
      <TextInput id="Cover" label="Capa:" value={cover} setValue={setCover} />

      <button>Adicionar à biblioteca</button>
    </form>
  );
}
