import { CartList } from 'src/utils/models';

export interface Props {
  carts: Array<CartList>;
  updateCart: (id: string, quantity: string | number) => void;
  handleOpen: (cart: any, food: any) => void;
  className: string;
}
