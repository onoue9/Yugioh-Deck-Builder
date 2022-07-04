import { useEffect, useState } from "react";
import { getCard } from "../services/fetch";
import { Card } from "./Card";

export function CardBox() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const getCards = async () => {
      const { data } = await getCard();
      setCards(data);
    };
    getCards();
}, []);

  return (
    <>
      {cards.map(card => {
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
          />
        )
      })}
    </>
  );
}