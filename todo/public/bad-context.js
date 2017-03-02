const origParse = JSON.parse;
const origStringify = JSON.stringify;

JSON.parse = function(...args) {
  if (/secret/i.test(args)) {
    console.log('---> Transmitting from JSON.parse')
    console.log(...args)
    console.log('---')
  }
  return origParse(...args)
}

JSON.stringify = function(...args) {
  if (args[0] && args[0].message && /secret/i.test(args[0].message)) {
    console.log('---> Transmitting from JSON.stringify')
    console.log(...args)
    console.log('---')
  }
  return origStringify(...args)
}
