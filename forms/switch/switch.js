//Creating variables for user to input
let userName = prompt("What is your name?")
let userState = prompt("What state do you live in?")
let userTemperature = Number(prompt("What temperature is it outside (Fahrenheit)?"))

//Creating variable for outputting messages
let messages = [`wear a warm coat, hat, scarf and gloves.`,`wear a warm coat but you won't need a hat, scarf or gloves.`,`wear your warmest coat, a warm hat, a scarf, and warm gloves.`,`wear a warm coat, hat and gloves. Maybe a scarf too`]

//String method to convert the state entered to all capitals in case the user used lower case.
let upperCase = userState.toUpperCase()

//String method to convert the first letter of the user name to a capital in case the user used all lower case.
let lowerCase = userName.charAt(0).toUpperCase() + userName.slice(1)

//second program (switch method)
switch (upperCase, userTemperature) {
case (upperCase === "NE" && userTemperature <= 32):
  NSB.MsgBox(userName+", "+messages[0])
  break;
  case (upperCase === "NE" && userTemperature > 32 && userTemperature <= 50):
  NSB.MsgBox(userName+", "+messages[1])
  break;
  case (upperCase === "FL" && userTemperature > 32 && userTemperature <= 50):
  NSB.MsgBox(userName+", "+messages[2])
  break;
  case (upperCase === "FL" && userTemperature > 50 && userTemperature <= 70):
  NSB.MsgBox(userName+", "+messages[3])
  break;
  }