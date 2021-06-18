export interface Meal {
  date: string;
  available: boolean;
  image: string;
  name: string;
  price: number;
  _id: string;
}
interface Cart {
  amount: number;
  mealId: string;
  payment: boolean;
  quantity: number;
  userId: string;
  _id: string;
}

interface Food {
  available: boolean;
  data: string;
  image: string;
  name: string;
  price: string;
}

export interface CartList {
  cart: Cart;
  food: Food;
}

export interface paymentHistory {
  id: string;
  orders: [
    {
      food: Food;
      order: Cart;
    }
  ];
  paymentDate: string;
  status: string;
}
