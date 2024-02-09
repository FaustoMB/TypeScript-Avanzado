export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "custumer"
}

export type User = {
  username: string;
  role: ROLES;
}

const faustoUser: User = {
  username: 'faustoMB',
  role: ROLES.ADMIN
}