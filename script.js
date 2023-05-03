/* const a  =5;
const b = 2;
let myName="nico";

console.log(a+b);
console.log(a*b);                                             // const, let
console.log(a/b);
console.log("hello " + myName);
myName = "nicolas"

console.log("your new name is " + myName); */

// ------------------------------------------------------------------------------------------

/*const amIFat = null;
console.log(amIFat);
console.log(something, amIFat);*/


/*const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
let something;                                               // array
const sat = "sat";
const sun = "sun"; */

/* const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];

const nonsense =  [1, 2, "hello", false, null, true, undefined, "nico" ];

console.log(daysOfWeek, nonsense);

daysOfWeek.push("sun");

console.log(daysOfWeek); */

// ------------------------------------------------------------------------------------------

const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
player.fat = false;
player.lastName = "potato";
player.points = player.points+15;
console.log(player);
console.log(player.name);