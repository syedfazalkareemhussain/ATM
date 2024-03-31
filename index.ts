import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin =  1234;
let pinAns =await inquirer.prompt(
  [
    {
      name:"pin",
      message:"enter your pin",
      type:"number"
    }
  ]
);
//12345 ===1234 - false
if(pinAns.pin === myPin) {
  console.log("Cprrect pin code!!!");
 let opreationAns = await inquirer.prompt(
  [
    {
      name:"opreation",
      message:"please select option",
      type:"list",
      choices:["withdraw","check balance"]
    }
  ]
 );
 console.log(opreationAns);
 if(opreationAns.opreation === "withdraw") {
  let amountAns = await inquirer.prompt(
  [
    {
      name:"amount",
      message:"enter your amount",
      type:"number"
    }
  ]
  );
// =,-=,+=
myBalance-= amountAns.amount;
console.log("Your remaining balance is: "+ myBalance)
 }else if (opreationAns.opreation === "check balance"){
  console.log("you balance is:"+ myBalance)
 }
}
else {
  console.log("Incorrect pin number");
}