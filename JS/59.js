import fs from "fs";

function Readfile(fileName)
{
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
}

function WriteFile(File)
{
    return new Promise((resolve, reject) => {
        fs.writeFile(File, Readfile)
    })
}