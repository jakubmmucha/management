import {Billing} from './billing';

export class User {
 public id: number;
  public username: string;
  public firstname: string;
  public lastname: string;
  public email: string;
  public status: any;
  public  password: any;
  public phonenumber: string;
  public gender: string;
  public dob: string;
  public healthdescription: any;
  public billingList: Billing[];
  roles: {
  id: number;
    name: string;
  }[];
}
