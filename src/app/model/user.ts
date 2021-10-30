export interface UserDto {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  roleName: string,
  userAddress: Address[]
}

export interface Address {
  county: string,
  city: string,
  street: string,
  zipcode: string,
  number: number
}
