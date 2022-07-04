import { CardBox } from "./components/CardBox";

function App() {
  return (
    <main className="flex flex-col bg-dark-hole text-white">
      <h1 className="w-40 self-center text-center">Yugioh Deck Builder</h1>
      <div className="flex flex-wrap justify-center w-screen h-screen overflow-auto">
        <CardBox />
      </div>
    </main>
  )
}

export default App
