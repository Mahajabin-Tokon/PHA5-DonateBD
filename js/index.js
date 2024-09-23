// Changing HTML Pages
function changePageToFAQ() {
  window.location.href = "./faq.html";
}

function changePageToHome() {
  window.location.href = "./index.html";
}

// Swtiching between Donation & History Section
document
  .getElementById("donation-section-btn")
  .addEventListener("click", function () {
    showSectionById("donation-section");
  });

document
  .getElementById("history-section-btn")
  .addEventListener("click", function () {
    showSectionById("history-section");
  });

// Adding Donation Calculation
document
  .getElementById("donate-one-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const currentBalance = getTextFieldValueById("current-balance");
    const donateOneAmount = getTextFieldValueById("donate-one-amount");
    const amount = getInputFieldValueById("donate-one-input");

    console.log(amount);

    if (amount <= currentBalance && amount >= 0) {
      const newBalance = currentBalance - amount;
      document.getElementById("current-balance").innerText = newBalance;

      const newDonationAmount = donateOneAmount + amount
      document.getElementById("donate-one-amount").innerText = newDonationAmount;

      // add to transaction history
      //   const p = document.createElement("p");
      //   p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
      //   console.log(p);

      //   // should be a common function
      //   document.getElementById("transaction-container").appendChild(p);
    } else if (amount <= 0) {
      alert("Donation amount cannot be negative");
    } else if (isNaN(amount)) {
      alert("Please input number only");
    } else {
      alert("Donation amount is exceeding current balance");
    }
  });
