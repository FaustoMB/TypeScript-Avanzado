// Fausto => [F,a,u,s,t,o] => string =>> string[]
// [F,a,u,s,t,o] => Fausto =>  string[] => string

export function parseString(input:string): string[];
export function parseString(input:string[]): string;
export function parseString(input:number): boolean;


// export function parseString(input: string | string[]): string | string[] {
//   if (Array.isArray(input)){
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }
export function parseString(input: unknown): unknown {
  if (Array.isArray(input)){
    return input.join(''); // string
  } else if(typeof input === 'string'){
    return input.split(''); // string[]
  }  else if(typeof input === 'number'){
    return true; // boolean
  }
}

const rtaArray = parseString('Fausto');
// if (Array.isArray(rtaArray)){
  rtaArray.reverse();
// }
console.log('rtaArray', rtaArray);

const rtaString = parseString(['F','a','u','s','t','o'])

// if (typeof rtaString === 'string'){
  rtaString.toLowerCase();
// }
console.log('rtaString', rtaString);

const rtaBoolean = parseString(12);
console.log('rtaBoolean', rtaBoolean);

