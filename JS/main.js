// To Do App
import readline from "readline-sync";
import fs from "fs";
import users from "./index.js";

async function menuDisplay() {
  console.clear();
  console.log(
    `Press 0 to exit
    \t1 Create a new Register
    \t2 to Login
    \t3 to Insert new to-do
    \t4 to Fetch
    \t5 to Edit to-do
    \t6 to Delete a to-do
    \t7 o Delete a user`
  );
  let Option = readline.questionInt("Choose an option :\n");

  switch (Option) {
    case 1:
      await users.registerUser();
      break;
    case 2:
      users.loginUser();
      break;
    case 3:
      users.insert();
      break;
    case 4:
      users.Fetch();
      break;
    case 5:
      users.edit();
      break;
    case 6:
      users.DeleteToDo();
      break;
    case 7:
      users.DeleteUser();
      break;
  }
  
  let ShouldContinue = readline.question("Want to continue ?(Y/n)");
  if (ShouldContinue == 'Y')
  {
      menuDisplay();
  }
  else
  {
    console.log("Thank u Bye Bye :)");
  }

}

menuDisplay();