import axios from 'axios';
import { GetCardResponse } from '../components/card';

export async function getCard() {
  const { data } = await axios.get<GetCardResponse>('https://db.ygoprodeck.com/api/v7/cardinfo.php?&atk=2500');
  return data;
};
