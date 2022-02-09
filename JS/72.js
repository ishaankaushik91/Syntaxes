import fs from "fs";

function ReadFile(fileName) {
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

function WriteFile(Name, fileName) {
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

function DeleteFile(Name) {
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

ReadFile("72.js")
  .then((res) => {
    WriteFile("New.txt", res);

    setTimeout(() => {
      DeleteFile("New.txt");
    }, 10000);
  })
  .catch((error) => {
    console.log(error);
  });
