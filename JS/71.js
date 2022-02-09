import fs from "fs";

fs.readFile("70.js", (err, data) => {

    if (err)
    {
        throw err;
    }
    let fileData = data;

    fs.writeFile("New.txt", fileData, (err) => {
        if (err)
        {
            throw err;
        }
        console.log("File created successfully");
    })

})