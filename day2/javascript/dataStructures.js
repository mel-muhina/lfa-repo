//  Array

// const simpleArray = ["London","Manchester","Leeds","Tottenham", "York"]

// // const newArray = simpleArray.filter(city => city.length <6) // Annoymous function so returns only less than 6 characters
// const newArray = simpleArray.map(city => city.toUpperCase()) // Annoymous function so returns only less than 6 characters


// console.log(newArray);

// const melObject = {
//     firstName: "Mel",
//     secondName: "Muhina",
//     age: 31,
//     bloodType: "B-Positive",
//     location: "London",
//     trainer: false
// }

// const { firstName, trainer, favFilm="None" } = melObject // if there is no favFilm then use this, otherwise use this value

// // console.log(melObject.bloodType);
// // console.log(melObject['trainer']);

// console.log(firstName, trainer, favFilm);


const countTarget = (arr, target) => {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++
        }
    } 

    return {
        success: count > 0,
        count: count
    }
   
    
}

countTarget([1,3,1,6,1,5,7], 1);