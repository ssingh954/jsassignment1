function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr+"°F";
}
console.log(cToF(60))

function FtoC(fahrenheit){
    let celcius = fahrenheit* 5 / 9 - 32;
    return celcius+"°C";
}
console.log(FtoC(45));