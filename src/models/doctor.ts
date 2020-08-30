import { IUser } from "./user";
import { IAddress } from "./address";
import { ISpeciality } from "./speciality";

export interface IDoctor {
  user: IUser;
  address: IAddress;
  specialities: ISpeciality[];
}
