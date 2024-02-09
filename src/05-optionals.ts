export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10, // || toma el 0 hacia la derecha
    isNew: isNew ?? true, // || toma el false hacia la derecha
  }
}

// 0 === false
//'' === false
// false ===  false

const p1 = createProduct(1,true,12)
console.log(p1);
const p2 = createProduct(1)
console.log(p2);

const p3 = createProduct(1,false, 0)
console.log(p3);

