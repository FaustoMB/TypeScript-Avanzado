import {User,ROLES} from './01-enum'

const currentUser: User = {
  username: 'faustomb',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role === 'admin'){
    return true
  }

  return false;
}

const rta = checkAdminRole();
console.log('checkAdminRole', rta)

export const checkRole = (role1:string, role2:string) => {
  if (currentUser.role === 'admin'){
    return true;
  }

  if(currentUser.role  == role2){
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2)

export const checkRole2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)){
    return true;
  }

  return false;
}

const rta3 = checkRole2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRole2', rta3)

export const checkRole3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)){
    return true;
  }

  return false;
}

const rta4 = checkRole3(ROLES.ADMIN, ROLES.CUSTOMER);
console.log('checkRole3', rta4)