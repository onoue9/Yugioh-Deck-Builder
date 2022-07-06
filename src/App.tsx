import { CardBox } from "./components/CardBox";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="flex flex-col h-screen bg-dark-hole text-white">
      <Header />
      <div className="flex flex-wrap self-center justify-center w-screen h-screen overflow-auto">
        <CardBox />
      </div>
      <Footer />
    </main>
  )
}

export default App
