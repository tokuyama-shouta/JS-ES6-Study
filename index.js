
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


// map 

// const array = [1,2,4,8];
// const resultArray = array.map(x => x * 2);
// console.log(resultArray)

// const object = {
//   "hoge": {text: "fuga"},
//   "foo": {text: "bar"},
//   "fiz": {text: "buzz"}
// };

// const objectToArray = Object.keys(object).map(key => {
//   const value = object[key]
//   value['id'] = key 
//   console.log(value)
//   return value
// })
// console.log(objectToArray);



//filter

// const objectArray = [
//   {id: "hoge", text: "fuga"},
//   {id: "foo", text: "bar"},
//   {id: "fiz", text: "buzz"},
// ];

// const result = objectArray.filter(object => {
//   return object.id === 'hoge';
// });
// console.log(result[0].text)


//findIndex

// const index = objectArray.findIndex(object => {
//   return object.id === 'hoge'
// })

// console.log(index,objectArray[index]);


//非同期処理
// Promise& async/await

//Promise
// const promiseFunc = () => {
//   return new Promise((resolve, reject) => {
//     someAsynchronousFunc(() => {
//       //何かしらの非同期処理
//     }).then(() => {
//       //非同期処理が成功した場合
//       return resolve('成功!')
//     }).catch(() => {
//       //非同期処理が失敗した場合
//       return reject('失敗!')
//     })
//   })
// }

// const synchronousFunc = () => {
//   console.log("これは同期処理関数のログです")
//   return '完了'
// };

// const message = '同期処理'
// const result = synchronousFunc()
// console.log(message + result)


//非同期処理を行う関数

// const getGitUsername = () => {
//   return new Promise((resolve, reject) => {

//     const url = 'https://api.github.com/users/deatiger'
  
//     //GitHub APIをFetchメソッドで実行
//     fetch(url).then(res => res.json())
//       .then(json => {
//         console.log('これは非同期処理成功時のメッセージです')
//         return resolve(json.login)
//       }).catch(error => {
//         console.log('これは非同期処理失敗時のメッセージです', error)
//         return reject(null)
//       })
//   })
// }

// const message = "GitのユーザーIDは"
// getGitUsername().then(username => {
//   console.log(message + username)

// })


// const getGitUsername = async () => {
//   const message = 'GitのユーザーIDは';
//   const url = 'https://api.github.com/users/deatiger'

//   const json = await fetch(url)
//     .then(res => {
//       console.log('これは非同期処理成功時のメッセージです');
//       return res.json()
//     }).catch(error => {
//       console.error('これは非同期処理失敗時のメッセージです', error)
//       return null
//     });
  
//     const username = json.login
//   console.log(message + username)
// }
// getGitUsername()
//do
//gg

//データ型

// const condition = true;

// if (condetion) {
//   const x = 100;
//   const y = 0.5 * x ** 2;
//   console.log(y);

// }
// console.log('出力します。');

// let x = 100;
// let y = 30;
// console.log(x + y);
// console.log(x * y);
// {
//   //ブロックスコープの中
//   let = 1;
//   console.log(x);
//   {
//     //ブロックスコープの中の中
//   }
// }
 
// let x = 0;
// while(x > 10){
//   //処理
//   console.log(`現在の値は${x}です。`);
//   x++;
// };


// for(let x = 1; x < 10; x++) {
//   let row = "";
//   for(let y = 1; y < 10; y++) {
//     row += `${x * y} `;
//   }
//  console.log(row);
// }

// for(let x = 1; x <=100; x++) {
//   if(x % 15 === 0) {
//     console.log('FizzBuzz!');
//   } else if (x % 5 === 0) {
//     console.log('Buzz!');
//   }else if(x % 3 === 0){
//     console.log(('Fizz!'));
//   }else{
//     console.log(x);
//   }
// }

// const max = (x, y) => {
//   if(x < y) {
//     return y;
//   }
//   return x;
// }

// console.log(max(5, 7));

// function max(x, y) {
//   if(x < y) {
//     return y;
//   }
//   return x;
// }

// console.log(max(5, 7));

// const ageToType = (age) => {
//   if(age < 3) {
//     return '赤ちゃん';
//   }else if (age < 18) {
//     return '子供'
//   }else if (age < 65){
//     return '大人';
//   }else{
//     return 'お年寄り'
//   }
// }

// const FizzBuzz = (x) => {
  
//     if(x % 15 === 0) {
//       return 'FizzBuzz!';
//     } else if (x % 5 === 0) {
//       return 'Buzz!'
//     }else if(x % 3 === 0){
//       return 'Fizz!'
//     }else{
//       return x;
//     }
// }

// for (let i = 1; i <= 100; i++){
//   console.log(FizzBuzz(i));
  
// }

const downtown = {
  name: 'ダウンタウン',
  boke: '松本',
  tsukkomi:'浜田'
}

console.log(downtown.boke);