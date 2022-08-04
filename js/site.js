// Get String Value From The Page
function getStringValue() {
  // Hide Message Area
  document.getElementById("alert").classList.add("invisible");
  // Get user string from the page
  let userString = document.getElementById("userString").value;
  // Check for a palindrome
  let returnObj = checkForPalindrome(userString);
  // Display message to the screen
  displayMessage(returnObj);
}

// Reverse The String
function checkForPalindrome(userString) {
  // Convert UserString to Lower Case
  userString = userString.toLowerCase();
  // Remove spaces and special characters
  let regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, "");
  // Reverse The String
  let revString = [];
  let returnObj = {};
  // Reverse A String Using A For Loop
  for (let i = userString.length - 1; i >= 0; i--) {
    revString += userString[i];
  }
  // Check for Palindrome
  if (revString == userString) {
    returnObj.msg = "Well done! You've entered a Palindrome!";
  } else {
    returnObj.msg = "Sorry! You did not enter a Palindrome.";
  }
  returnObj.reversed = revString;

  return returnObj;
}

// Display Message With Reverse String To The User
function displayMessage(returnObj) {
  // write to the page
  document.getElementById("alertHeader").innerHTML = returnObj.msg;
  // show reverse phrase
  document.getElementById(
    "msg"
  ).innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
  // show alert box
  document.getElementById("alert").classList.remove("invisible");
}
