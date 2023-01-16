export interface IUser {
  firstName: string;
  lastName: string;
  feedbackCount?: number;
  rating?: number;
  email: string;
  role: string;
  blocked?: boolean;
  blockedUntil?: number;
  id: string;
  currentOrder?: string;
  car?: {
    make: string;
    model: string;
    year: number;
    color: string;
    photo: string;
  };
}
