// const intersection = (...arrays) => {
//     // Напишите здесь своё решение
//    }
   
   

   const arr1 = [1, 2];
   const arr2 = [2, 3];
   const arr3 = ['a', 'b'];
   const arr4 = ['b', 'c'];
   const arr5 = ['b', 'e', 'c'];
   const arr6 = ['b', 'b', 'e'];
   const arr7 = ['b', 'c', 'e'];
   const arr8 = ['b', 'e', 'c'];

   const intersection_1_2 = arr1.filter(element => arr2.includes(element));
   console.log(intersection_1_2)

   const intersection_3_4_5 = arr3.filter(element => arr4.includes(element)// => arr5.includes(element)
   );
   console.log(intersection_3_4_5)

 const intersection_6_7_8 = arr6.filter(element => arr7.includes(element) // => arr8.includes(element)
 );
console.log(intersection_6_7_8)

//    console.log(intersection(arr1, arr2)) // [2]
//    console.log(intersection(arr3, arr4, arr5)) // ['b']
//    console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']