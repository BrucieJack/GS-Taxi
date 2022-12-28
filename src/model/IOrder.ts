export interface IOrder {
  id: string;
  source: string;
  destination: string;
  price: number;
  createdAt?: number;
  client?: {
    firstName: string;
    lastName: string;
    id: string;
  };
}
