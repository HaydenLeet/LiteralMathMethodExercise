// 1a
let warmHugs = 'Hi, I\'m Olaf and I like warm hugs.';

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I\'ve been impaled";

// 2b
// console.log(beenImpaled.slice(18, 36));
// OR
// console.log(beenImpaled.slice(18));
// OR
console.log(beenImpaled.slice(-18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot} or bones`
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
// let randomNumber = Math.floor(Math.random()*3) + 1;
// console.log(randomNumber);

let randomNumber = Math.random();
console.log("Initial randomNum: ", randomNumber);

randomNumber *= 3;
console.log("After multiply by 3 randomNum: ", randomNumber);

randomNumber = Math.ceil(randomNumber);
console.log("Final randomNum: ", randomNumber);

// BONUS
// 6
console.log("Let It Go!".repeat(2).toUpperCase().trim()); 
// "LET IT GO! LET IT GO!"

// 7a
let reindeers = "Reindeers are better than people."

// 7b
console.log(reindeers.replaceAll(" ", "_"));
// "Reindeers_are_better_than_people."
// OR
console.log(reindeers.replace(/ /g, "_"));

// 8
console.log(Math.SQRT2);
// OR
console.log(Math.sqrt(2));

// 9
// let newRandomNumber = Math.floor(Math.random() * 17) + 7;
// console.log(newRandomNumber);
// OR
let newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1)) + 7;
console.log(newRandomNumber);

