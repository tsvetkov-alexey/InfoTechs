export interface Address {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;
  phone: string;
  address: Address;
  height: number;
  weight: number;
  email: string;
}

export interface TableDataProps extends User {}

export type SortKey = 'имени' | 'возрасту' | 'полу' | 'городу';
export type SortValue = 'firstName' | 'age' | 'gender' | 'address.city';
