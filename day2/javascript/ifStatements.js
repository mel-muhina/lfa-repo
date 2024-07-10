// const secondPastMinute = new Date().getSeconds()

// if (secondPastMinute <= 20) {
//     console.log("Less than 20 seconds gone. The game should be over soon")
// } else if (secondPastMinute <= 40) {
//     console.log("Between 20 and 40 seconds past the minute. This is painful")
// } else {
//     console.log("Over 40 seconds past the minute...What's the ref playing at?");
// }

let num = 4

if (num >= 11) {
    console.log("High");
} else if (num < 3) {
    console.log("Low");
} else if (num >= 3 && num > 11) {
    console.log("Medium");
} else if (num === 7) {
    console.log("Exact");
}

console.log(num);