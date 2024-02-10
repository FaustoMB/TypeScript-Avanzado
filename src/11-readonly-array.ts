const numbers: number[] = [1,2,3,4,5];

numbers.push(1);
numbers.pop();
numbers.unshift(1);

const numbers2:ReadonlyArray<number> = [1,2,3,4,5];

numbers2.push(1);
numbers2.pop();
numbers2.unshift(1);
numbers2.filter(() => {});
numbers2.reduce(() => 0);
numbers2.map(() => 1)
