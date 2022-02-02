// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=44ab3b5dbdad937558db235e5d439432
let Ask = require("readline-sync");
let axios = require("axios");
let City_name = Ask.question("Enter city name ");
let Choice = Ask.questionInt("Please choose an option : \n1 for temperature in Cel.\t2 for temperature in Fah.\t3 for Coordinates\t4 for Humidity\t0 to exit\n")


axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City_name}&appid=d341b8ec825a64ff570281787c148a83`)
    .then(function (response) {
        
        let Kel_to_Cel = response.data.main.temp - 273.15; // variable for option 1
        let Kel_to_Fah = (response.data.main.temp - 273.15) * 9 / 5 + 32; // variable for option 2

        //console.log(response.data);
    
        switch (Choice) {
            case 1:
                console.log(`Temperature in ${City_name} is ${Kel_to_Cel}`);
                break;
            case 2:
                console.log(`Temperature in ${City_name} is ${Kel_to_Fah}`);
                break;
            case 3:
                console.log(`Longitude of ${City_name} is ${response.data.coord.lon} & Lattitude is ${response.data.coord.lat}`)
                break;
            case 4:
                console.log(`Humidity in ${City_name} is ${response.data.main.humidity}`);
                break;
            default:
                console.log("Thank you !");
                break;
        }
        console.log("Thank you !");
    })