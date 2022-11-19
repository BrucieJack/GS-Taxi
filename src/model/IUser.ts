export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  car?: {
    make: string;
    model: string;
    year: number;
    color: string;
  };
}
