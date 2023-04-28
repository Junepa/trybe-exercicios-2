const soma = require('./sum.js')
// const sum = (a, b) => a + b;

// test('sums two values', () => {
//   expect(sum(2, 3)).toEqual(5);
// });

// // como escrever o teste?
// it ('soma de dois valores', ()=> {
//   expect(sum(2,3)).toEqual(5)
// });

describe('testa se a soma de 4 e 5 é 9' () => {
  it('soma de quatro e nove', () => {
    it(sum(5,4)).toBe(9);
    it(sum(0,0)).toBe(0);
  })
})

describe('lança erro com string'() => {
  it('soma number e string'() => {
    expect(()=> (sum(4,'5'))).toThrowError('Os dois valores devem ser numéricos')
  }
})