import { useEffect, useState } from "react";
import { getCard } from "../services/fetch";
import { Card } from "./Card";
import { usePagination } from 'react-use-pagination';

export function CardBox({ main }: { main: any}) {
  const [cards, setCards] = useState<Card[]>([]);
  
  useEffect(() => {
    const getCards = async () => {
      const { data } = await getCard();
      setCards(data.filter((item) => item.type !== 'Skill Card'));
    };
    getCards();
  }, []);

  const { 
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
  } = usePagination({ totalItems: cards.length, initialPageSize: 29 });
  
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-wrap justify-center">
        <>
          {cards.slice(startIndex, endIndex).map(card => {
            return (
              <Card
                key={card.id}
                archetype={card.archetype}
                atk={card.atk}
                card_images={card.card_images}
                card_prices={card.card_prices}
                card_sets={card.card_sets}
                def={card.def}
                desc={card.desc}
                id={card.id}
                level={card.level}
                name={card.name}
                race={card.race}
                scale={card.scale}
                type={card.type}
                main={main}
              />
            )
          })}
        </>
      </div>
      <div className="flex self-center m-2 p-1 border rounded-md bg-indigo-900">
        <button onClick={setPreviousPage} disabled={!previousEnabled}>
          <strong className="mx-2 p-1 bg-indigo-900">Previuos Page</strong>
        </button>
        <span>{currentPage + 1} of {totalPages}</span>
        <button onClick={setNextPage} disabled={!nextEnabled}>
          <strong className="mx-2 p-1 bg-indigo-900">Next Page</strong>
        </button>
      </div>
  </div>
  );
}
