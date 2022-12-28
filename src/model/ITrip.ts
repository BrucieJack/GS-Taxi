export interface ITrip {
  id: string;
  source?: string;
  destination?: string;
  price?: number;
  active?: boolean;
  createdAt?: number;
  rating?: number;
  client: {
    firstName: string;
    lastName: string;
    id: string;
  };
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
