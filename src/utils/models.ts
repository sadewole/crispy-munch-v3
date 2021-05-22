export interface Meal {
  date: string;
  available: boolean;
  image: string;
  name: string;
  price: number;
  _id: string;
}

export interface Cart {
  amount: number;
  mealId: string;
  payment: boolean;
  quantity: number;
  userId: string;
  _id: string;
}
