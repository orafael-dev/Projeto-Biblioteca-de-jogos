import { useState } from "react";

export default function App() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("games-lib")
    if (!storedGames) return []
    return JSON.parse(storedGames)
  })
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
 
  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random()*1000000)
    const game = {id, title, cover}
    setGames(state => {
      const newState = [...state, game]
    localStorage.setItem("game-lib", JSON.stringify(newState))
    return newState
    })
  }

  const removeGame = (id) => {
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <div id="App">
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Nome do jogo:</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Capa do jogo:</label>
          <input
            type="text"
            name="cover"
            id="cover"
            required
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <button>Adicionar à biblioteca</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="" />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
