import { Activity } from './Activity';

export interface Camper {
  id: number;
  name: string;
  age: number;
  activities: Activity[]
}
