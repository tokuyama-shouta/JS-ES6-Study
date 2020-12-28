
//var let scopeの違い
// const testScope = (scope) => {

//   if(scope === 'function'){
//     var functionScope = '関数スコープ内ならどこからでも参照できます'

//   }else if(scope === 'block'){

//     let blockScope = 'ブロックスコープ内でしか参照できません'
//     console.log(blockScope)
//   }

//   console.log(functionScope)
// }
// testScope('block')

// let mutobleText = "let変更前";
// mutobleText = 'let変更後';
// console.log(mutobleText);

// const immutobleText = 'const変更前';
// console.log(immutobleText);

// const mutobleArray = [1,2,3]
// mutobleArray.push(4)
// console.log(mutobleArray)

// const mutobleObject = {id: 'hoge', value: 'fuga'}
// mutobleObject['name'] = 'bar'
// console.log(mutobleObject)

//アロー関数

// function namedFunc(message) {
//   console.log(message);
// }

// const arrowFunc = (message) => {
//   console.log(message);
// }

// const oneLineArrowFunc = (message) => console.log(message);

// const users = {
//   hoge: 'toku'
// }
// const getUserName = (userId) => users[userId];


// namedFunc('これは名前つき関数です');
// arrowFunc('これはアロー関数です');
// oneLineArrowFunc('これは一行で書いたアロー関数です');

// const username = getUserName('hoge');
// console.log(username);

