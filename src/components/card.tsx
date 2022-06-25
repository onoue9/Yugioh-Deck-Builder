import { useEffect, useState } from "react";
import { getCard } from '../services/fetch';

interface Card {
  archetype: string;
  atk: number;
  card_images: [{
    id: number;
    image_url: string;
    image_url_small: string;
  }],
  card_prices: [{
    amazon_price: string;
    cardmarket_price: string;
    ebay_price: string;
    tcgplayer_price: string;
  }],
  card_sets: [{
    set_code: string;
    set_name: string;
    set_price: string;
    set_rarity: string;
    set_rarity_code: string;
  }],
  def: number;
  desc: string;
  id: number;
  level: number;
  name: string;
  race: string;
  scale: number;
  type: string;
};

export type GetCardResponse = {
  data: Card[];
}

export function Card() {
  const [cards, setCards] = useState<Card[]>([]);

useEffect(() => {
  const getCards = async () => {
    const { data } = await getCard();
    setCards(data);
  };
  getCards();
}, [])

  return (
    <>
     {cards.map(card => {
      return (
        <div 
          key={card.id}
          className="flex-col text-center w-20 h-20"
        >
          <img src={card.card_images[0].image_url} />
        </div>
      )
     })}
    </>
  )
};
