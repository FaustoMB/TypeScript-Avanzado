enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "custumer"
}

type User = {
  username: string;
  role: ROLES;
}

const faustoUser: User = {
  username: 'faustoMB',
  role: ROLES.ADMIN
}