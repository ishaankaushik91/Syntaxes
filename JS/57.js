import readlineSync from "readline-sync";
import axios from "axios";

function userInput() {
  var city = readlineSync.question("Enter your City Name :");
  return city;
}
function getWeather(city) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d341b8ec825a64ff570281787c148a83`
  );
}
function menu() {

  let Completed = 0;
  console.clear();
  console.log("0 to exit. 1 to Weather");
  

    var option = readlineSync.questionInt("Enter your option : ");
    switch (option) {
      case 1:
        getWeather(userInput()).then((res) => {
          console.log(res.data.main);
          Completed = 1;
        });
        break;
      default:
        console.log("Exit");
    }

    let shouldContinue = readlineSync.questionInt("Want to continue ?\n");
    if (shouldContinue === 'y')
    {
      menu();
    }
    
  
}
menu();

/*

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

*/
