import fs from "fs";

async function ReadFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function WriteFile(Name, fileName) {
  return new Promise((resolve, reject) => {
    fs.writeFile(Name, fileName, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function DeleteFile(Name) {
  return new Promise((resolve, reject) => {
    fs.unlink(Name, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

try {
    //await ReadFile("73.js");
    await WriteFile("New.txt", "73.js");
} catch (error) {
    
}