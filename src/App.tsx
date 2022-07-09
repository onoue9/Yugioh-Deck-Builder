import { useEffect, useRef, useState } from "react";
import { CardBox } from "./components/CardBox";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [main, setMain] = useState(null);
  const mainSection = useRef(null);

  useEffect(() => {
    setMain(mainSection);
  }, []);

  return (
    <main ref={main}className="flex flex-col h-screen bg-black text-white">
      <Header />
      <div className="flex flex-wrap self-center justify-center w-screen h-screen overflow-auto">
        <CardBox />
      </div>
      <Footer />
    </main>
  )
}

export default App
