// Fausto => [F,a,u,s,t,o] => string =>> string[]
// [F,a,u,s,t,o] => Fausto =>  string[] => string

function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)){
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseString('Fausto');
if (Array.isArray(rtaArray)){
  rtaArray.reverse();
}
console.log('rtaArray', rtaArray);

const rtaString = parseString(['F','a','u','s','t','o'])

if (typeof rtaString === 'string'){
  rtaString.toLowerCase();
}
console.log('rtaString', rtaString);

