import { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";

export interface Card {
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

export function Card(props:Card) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="flex flex-col m-1">
      <button
        type="button"
        className="button flex border p-1 w-full h-full"
        onClick={() => {
          setOpen(o => !o)
        }}
        >
        <img src={props.card_images[0].image_url_small} />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal flex justify-center">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <div className="flex flex-col rounded-lg w-auto h-auto p-10 justify-center self-center text-center bg-black text-white">
            <img className="self-center w-80"src={props.card_images[0].image_url} />
            <p className="self-center text-xl underline">{props.name}</p>
            <span><strong>Level:</strong> {props.level}</span>
            <span><strong>Race:</strong> {props.race}</span>
            <span><strong>Type:</strong> {props.type}</span>
            <span><strong>Atk:</strong> {props.atk}</span>
            <span><strong>Def:</strong> {props.def}</span>
            <p><strong>Description:</strong></p>
            <span className=" self-center">{props.desc}</span>
          </div>
        </div>
      </Popup>
    </div>
  )
};
