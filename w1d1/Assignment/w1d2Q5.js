  "use strict";

  function convertFahrenheit(temp) {

      let celcius = parseInt(5 / 9) * (temp - 32);

      return celcius;

  }
  console.log("expected 0: ", convertFahrenheit(32));
  console.log("expected -17.7778: ", convertFahrenheit(0));
  console.log("expected 100: ", convertFahrenheit(212));
  console.log("expected 37.7778: ", convertFahrenheit(100));