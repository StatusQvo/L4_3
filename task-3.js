//1  console.log
console.log(String(console.log), Number(console.log), Boolean(console.log))

//2 { name: 'Maxim' }
console.log(
  String({ name: 'Maxim' }),
  Number({ name: 'Maxim' }),
  Boolean({ name: 'Maxim' })
)

//3 Symbol('key')
console.log(
  String(Symbol('key')),
  // Number(Symbol('key')), //Symbol can't be converted into Number!
  Boolean(Symbol('key'))
)

//4 Number
console.log(String(Number), Number(Number), Boolean(Number))

//5 ''
console.log(String(''), Number(''), Boolean(''))

//6 0
console.log(String(0), Number(0), Boolean(0))

//7 -10
console.log(String(-10), Number(-10), Boolean(-10))

//8 '-105'
console.log(String('-105'), Number('-105'), Boolean('-105'))
