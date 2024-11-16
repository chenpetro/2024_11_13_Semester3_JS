const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
  };
 

  // Перебір ключів об'єкта hotel
//   for (const key in hotel) {
//     console.log('Key: ', key);
//   }
 
  /*
   * Key: name
   * Key: stars
   * Key: capacity
   */

//   for (const key in hotel) {
//     console.log('Value: ', hotel[key]);
//   }


//   const person = {
//     name: "Petro",
//     surname: "Chen",
//     age:40
//   }

//   for (const key in person) {
// console.log('I am', person[key]);

//   }


// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]         
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]

// console.log(keys,values, entries);


// const temperatures = [18, 14, 12, 21, 17, 29];
// const min = Math.min(...temperatures); // NaN
// console.log(min);

const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyHouses =  [...houses]
// const lessFamily = houses.slice(0,2)
// houses.push(64)
// console.log(copyHouses==houses);
// console.log(houses,copyHouses, lessFamily);


// Всі хто дивився серіал Game of Thrones знають, що ніхто крім сім'ї Ланістерів не платить за борги. Зробимо масив, який містить всі сім'ї, крім Ланістерів.

// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];
 
  // const onehouses = houses.slice(0,4);
  // const twohouses = houses.slice(5,6);
  // const newHouses = [...onehouses, ...twohouses]
  // console.log(newHouses);
  

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const d = { ...a, ...b };
// console.log(d); // {x: 0, y: 2, z: 3}


// const a = { x: 1, y: 2,e:20 };
// const b = { x: 0, z: 3,e:20, };
// const d = { ...a, ...b, a:10, x:23};

// {x:, y: , z: ,e: , a:}

// 1) Створіть масив об'єктів "products", де кожен об'єкт буде містити властивості "name", "price", "category" та "stock". Напишіть функцію, яка приймає масив об'єктів "products" і повертає загальну вартість товарів в наявності за вибраною категорією.

// const products = {
//   name: "tesla",
//   price: 35000,
//   category: "car",
//   stock: 25,
//  sum: function() {
//     return this.price*this.stock
//   }
// }
// console.log(products.sum());
// const values = Object.values(products);
// sumTwo=values[1]*values[3]
// console.log(sumTwo);


// const products = [
//   {
//       name:'Banana',
//       price:2,
//       category:'fruit'
//   },
//   {
//       name:'Potato',
//       price:1,
//       category:'vegetables'
//   },
//   {
//       name:'Watermalon',
//       price:10,
//       category:'fruit'
//   },
// ]
// function calcPrice(a){
//   let sum = 0
//   for (const element of a) {
//       sum = sum + element.price
//   }
//   return console.log(sum)

// }
// calcPrice(products)



// 2) Створіть об'єкт "user" з властивостями "name", "age", "email" та методом "login", який буде виводити повідомлення на екран з привітанням користувача та його даними. Для виклику методу "login" використовуйте функцію зворотнього виклику (callback).

// const user = {
//   name: 'Noris',
//   age: 555,
//   email: 'a@a.com',
//   login: function () {
//     return console.log(this.name, this.age, this.email);
//   }
// }
// user.login()

// const user = {
//   name: 'Noris',
//   age: 555,
//   email: 'a@a.com',
//   login: function(callback) {
//     callback(this.name, this.age, this.email); // Call the callback function with user data
//   }
// }

// // Callback function to display the user's data
// function greet(name, age, email) {
//   console.log(`Hello, ${name}! Age: ${age}, Email: ${email}`);
// }

// // Calling the login method and passing the callback function
// user.login(greet);





// 3) Створіть функцію "getObjectLength", яка приймає об'єкт як параметр і повертає кількість його властивостей.

const user = {
  name: 'Noris',
  age: 555,
  email: 'a@a.com'
}
function getObjectLength(a) {
  return console.log(Object.keys(a).length);
}

getObjectLength(user)


// 4) Створіть об'єкт "person" з властивостями "firstName", "lastName" та "fullName". Значення властивості "fullName" повинно бути отримано за допомогою з'єднання значень властивостей "firstName" та "lastName". Додайте до об'єкту метод, який буде виводити повідомлення на екран з повним ім'ям людини.

const person = {
  firstName: 'Noris',
  lastName: 'Great',
  message: function(){
    const fullName = this.firstName+' ' + this.lastName
    return console.log(fullName);
  }
}
person.message()


// 5) Створіть об'єкт "product" з властивостями "name", "price" та "quantity". Додайте до об'єкту метод, який буде розраховувати вартість всіх товарів. Результат повинен бути виведений на екран.

const product =
  {
  name: 'tire',
  price: 123,
  quantity: 55,
  sum: function () {
    totalSum = this.price*this.quantity
    return console.log(totalSum);
    
  }
  }

  product.sum()


// 6) Створіть масив об'єктів "movies", де кожен об'єкт буде містити властивості "title", "director", "year" та "genre". Напишіть функцію, яка приймає масив об'єктів "movies" та жанр (строку) як параметри, та повертає масив фільмів, які належать до цього жанру.

const movies =
[
  {
  title: 'Avatar',
  director: 'John',
  year: 55,
  genre: 'adventure'
  },
  {
    title: 'Christmas mood',
    director: 'Bear',
    year: 1909,
    genre: 'crimi'
    },
    {
      title: 'Sommer vibe',
      director: 'Mario',
      year: 2055,
      genre: 'adventure'
      }
    ]
 function calcMovies(a,b){
  let newMovies = []
  for (const element of a) {
      if (element.genre==b) {
        newMovies.push(element.title)
      }
      }
return newMovies;
}

const result = calcMovies(movies,'adventure');
console.log(result);
