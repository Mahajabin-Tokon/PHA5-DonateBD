// Function to receive input value by id
function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

// Function to receive text value by id
function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

// Donation and History button toggle functionality
function showSectionById(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
  const btnID = id + "-btn";
  document
    .getElementById("donation-section-btn")
    .classList.remove("bg-green-400");
  document
    .getElementById("history-section-btn")
    .classList.remove("bg-green-400");
  document.getElementById(btnID).classList.add("bg-green-400");
}
