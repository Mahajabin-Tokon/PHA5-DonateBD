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

    const histSectionEl = document.getElementById("history-section");

    const currentBalance = getTextFieldValueById("current-balance");
    const donateOneAmount = getTextFieldValueById("donate-one-amount");
    const title = document.getElementById("donate-one-title").innerText;
    
    const amount = getInputFieldValueById("donate-one-input");

    if (amount <= currentBalance && amount >= 0) {
      const newBalance = currentBalance - amount;
      document.getElementById("current-balance").innerText = newBalance;

      const newDonationAmount = donateOneAmount + amount;
      document.getElementById("donate-one-amount").innerText =
        newDonationAmount;

      console.log(histSectionEl);

      histSectionEl.innerHTML += `<div class="flex flex-col justify-center items-start p-4 mx-auto mt-10 w-11/12 border-2 rounded-lg">
        <p class="text-xl p-4">${amount}Tk is donated for ${title}</p>
        <p class="text-xl bg-slate-300 rounded-lg p-4 w-full">${new Date()}</p>
      </div>`;

    } else if (amount <= 0) {
      alert("Donation amount cannot be negative");
    } else if (isNaN(amount)) {
      alert("Please input number only");
    } else {
      alert("Donation amount is exceeding current balance");
    }
  });
