// Weather CLI Boilerplate (Exam-ready)

// 1️⃣ Get city from CLI argument
import "dotenv/config"
import fetch from "node-fetch";
// require("node-fetch")

const city = process.argv[2]; 
// const apiKey = process.env.WEATHER_API_KEY; // replace with env variable in real code
// console.log()
let apiKey=process.env.WEATHER_API_KEY
if (!city) {
  console.log("❌ Please provide a city. Example: node weather.js London");
  process.exit(1);
}
// daily learn  vercel 7
// 2️⃣ Preset output format (exam will check this)
// console.log(`Weather in ${city}:`);
// console.log("Temperature: XX °C");      // replace XX with fetched temperature
// console.log("Condition: XXXXX");       // replace XXXXX with weather description
// console.log("Humidity: XX%");          // replace XX with fetched humidity

// 3️⃣ TODO: Add fetch() + JSON parsing + print real values
async function printData() {
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13d615ce6a04b41dd66e9c6d65c4d8ea&units=metric`)
    console.log(response)
    let result= await response.json() //ip==promise but op==data so it req time
    console.log(result)
    // console.log(result)
//     console.log(`Weather in ${city}:`);
// console.log(`Temperature: ${result.main.temp} °C`);      // replace XX with fetched temperature
// console.log(`Condition: ${result.weather[0].description}`);       // replace XXXXX with weather description
// console.log(`Humidity: ${result.main.humidity}%`);  



    
}

printData()

