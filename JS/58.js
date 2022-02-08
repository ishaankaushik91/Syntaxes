import fs from "fs";

fs.readFile("sample.txt", (err, data) => {
    if (err)
    {
        throw err;
    }
    let fileData = data.toString().toUpperCase();
    fs.writeFile("SampleUppercase.txt", fileData, (err) => {
        if (err)
        {
            throw err;
        }
        console.log("File made successfully");
        fs.unlink("sample.txt", (err) => {
            console.log("Deleted");
        });
        console.log("File deleted successfully");
    })
});