import fs from "fs";

fs.unlink("SampleUppercase.txt", (err) => {
    console.log("File Deleted successfully");
})