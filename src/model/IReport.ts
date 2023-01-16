export interface IReport {
  id: string;
  comment: string;
  createdAt?: number;
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
      photo: string;
    };
  };
}
