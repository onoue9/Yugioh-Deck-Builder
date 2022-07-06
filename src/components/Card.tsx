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

  return (
    <div className="flex flex-col m-1 p-0 w-80">
      <div className="flex border m-1 p-2 w-full h-full">
        <img src={props.card_images[0].image_url}></img>
      </div>
      <div className="flex flex-col border m-1 p-2 w-full h-full text-center">
        <span><strong>Name:</strong> {props.name}</span>
        <span><strong>Atk:</strong> {props.atk}</span>
        <span><strong>Def:</strong> {props.def}</span>
        <span><strong>Desc:</strong> " {props.desc} "</span>
      </div>
    </div>
  )
};
