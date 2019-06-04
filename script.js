// I have a big object like this

var bigObj = {
    'main-dish': {
        'lasagna': true,
        'pasta': false,
    },
    'others': {
        'salad': true,
        'soup': true,
    },
}
 // and a small one, that should count how many 'false' values are for each key in the bigObj
// by default all is 0
var smallObj = {
    'main-dish': 0,
    'others': 0
}


  
  for (const key in bigObj) {
    let value = bigObj[key];
    
    //optional check for properties from prototype chain
    if (bigObj.hasOwnProperty(key)) {
      //no a property from prototype chain  
      console.log(key)   
      if(!bigObj[key])
      smallObj[key]++;
    }else{
      //property from protytpe chain
      console.log(bigObj[key])
    }
  }


// // I built a UI in Vue.js that updates the booleans in real time 
// // and with every change I check for the true/false with this for loop
// // The problem: if I update the booleans from the bottom or middle the smallObj is not updated;
// // Only if I start from the first key: lasagna the smallObj is being updated;

// for(var i = 0; i < Object.keys(bigObj).length; i ++) {
//     if(Object.keys(smallObj)[i] === Object.keys(bigObj)[i]) {
//         for(var j =0; j < Object.keys(bigObj[Object.keys(bigObj)[i]]).length; j++) {

//             if(!Object.values(bigObj[Object.keys(bigObj)[i]])[j]) {
//                     smallObj[Object.keys(bigObj)[i]]++
//                     console.log(Object.keys(bigObj[Object.keys(bigObj)[i]])[j]);
//             } else {
//                 console.log(Object.keys(bigObj[Object.keys(bigObj)[i]])[j]);
//             }
//         }
//     }
// }

console.log(smallObj)





















// var count_in_level = []
// var obj = {
//     a: 0,
//     b: {
//         ba: 1,
//         c: {
//             ca: 1,
//             cb: 2
//         }
//     }
// }

// function count(obj, level) {
//     var c = 0
//     if (typeof level == 'undefined') level = 1
//     if (!count_in_level[level]) count_in_level[level] = 0
//     if (typeof obj == 'object') {
//         for (var i in obj) {
//             if (typeof obj[i] == 'object') count(obj[i], level + 1)
//             c++;
//         }
//         count_in_level[level] += c
//     }
// }
// count(bigObj, )
// console.log(count_in_level)  // [1: 2, 2: 2, 3: 1]