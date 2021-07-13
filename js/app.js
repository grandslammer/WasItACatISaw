//Get the value from the string
function getValue() {
  document.getElementById("alert-success").classList.add("invisible")
  document.getElementById("alert-fail").classList.add("invisible")

  let userString = document.getElementById("userString").value

  userString = userString.toLowerCase()

  // Remove non alphanumeric characters and numbers
  userString = userString.replace(/[^a-z]/gi, '')

  let reversedString = reverseString(userString)

  let isPalindrome = false

  if (userString == reversedString) {
    isPalindrome = true
  }

  displayString(reversedString, isPalindrome)
}

//Reverse the string
function reverseString(userString) {
  let revString = []

  for (let i = userString.length - 1; i >= 0; i--) {
    revString += userString[i]
  }

  return revString
}

//Display the message with the reversed string
function displayString(revString, isPalindrome) {
  if (isPalindrome == true) {
    document.getElementById("msg-success").innerHTML = `${revString}`
    document.getElementById("alert-success").classList.remove("invisible")
  } else {
    document.getElementById("msg-fail").innerHTML = `${revString}`
    document.getElementById("alert-fail").classList.remove("invisible")
  }
}