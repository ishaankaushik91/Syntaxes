import readline from "readline-sync";
import fs from "fs";
import util from "util";
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

async function registerUser() {
  console.clear();

  try {
    console.log(`
    ========================\n
    Registering new user
    ========================\n`);
    let UserName = readline.question("Enter your name : ");
    let Password = readline.question("Enter a password : ", {
      hideEchoBack: true,
    });
    let Address = readline.question("Enter your address : ");
    let Phone = readline.question("Enter your mobile number : ");
    let Email = readline.question("Enter your email address : ");

    let UserData = { UserName, Password, Address, Phone, Email, todos: [] };
    console.log(UserData);
    let fileData = await readFile("Data.json");
    console.log(fileData.toString());
    fileData = JSON.parse(fileData.toString());

    let emaiFound = fileData.find(ele => ele.Email == Email);
    if (emaiFound)
    {
        console.log("Email already in use!");
        return;
    }
    fileData.push(UserData);
    await writeFile(`Data.json`, JSON.stringify(fileData));
    console.log("Resgistered succesfully");
    
  } 

  catch (error) {
    console.log(error);
  }
}

export default registerUser;
