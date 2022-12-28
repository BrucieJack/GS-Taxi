export interface IOffer {
  id: string;
  orderId?: string;
  price: number;
  createdAt?: number;
  driver: {
    firstName: string;
    lastName: string;
    id: string;
    car: {
      make: string;
      model: string;
      year: number;
      color: string;
      photo?: string;
    };
  };
}
