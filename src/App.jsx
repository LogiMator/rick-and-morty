import  GetCharacters  from "./components/getCharacters"

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick And Morty</h1>
      <GetCharacters />
    </div>
  );
}

export default App;