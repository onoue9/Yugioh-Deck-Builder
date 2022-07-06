import axios from 'axios';
import { GetCardResponse } from '../components/Card';

export async function getCard() {
  const { data } = await axios.get<GetCardResponse>('https://db.ygoprodeck.com/api/v7/cardinfo.php?format=Speed%20Duel');
  return data;
};
