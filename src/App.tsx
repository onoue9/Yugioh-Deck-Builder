import { useEffect, useRef, useState } from "react";
import { CardBox } from "./components/CardBox";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [main, setMain] = useState(null);
  const cardBoxDiv = useRef(null);

  useEffect(() => {
    setMain(cardBoxDiv.current);
  }, []);

  return (
    <main className="flex flex-col h-screen bg-black text-white">
      <Header />
      <div ref={cardBoxDiv} className="flex flex-wrap self-center justify-center w-screen h-screen overflow-auto">
        <CardBox main={main} />
      </div>
      <Footer />
    </main>
  )
}

export default App
