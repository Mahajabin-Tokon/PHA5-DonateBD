// Scroll function
const stickyNav = document.getElementById("scrolling-element");
const nav = document.getElementById("navbar");

// Use offsetTop to detect when it becomes sticky
const stickLimit = stickyNav.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > stickLimit) {
    stickyNav.classList.add("bg-gray-600 bg-opacity-25 backdrop-blur-lg");
    nav.classList.remove("bg-orange-50");
    nav.classList.add("bg-gray-600 bg-opacity-25 backdrop-blur-lg");
  } else {
    stickyNav.classList.remove("bg-gray-600 bg-opacity-25 backdrop-blur-lg");
    nav.classList.add("bg-orange-50");
    nav.classList.remove("bg-gray-600 bg-opacity-25 backdrop-blur-lg");
  }
});

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
    const title = document.getElementById("donate-one-title").innerText;
    const modal = document.getElementById("my-modal-1");

    const currentBalance = getTextFieldValueById("current-balance");
    const donateOneAmount = getTextFieldValueById("donate-one-amount");

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
      console.log(modal);

      modal.showModal();
    } else if (amount <= 0) {
      return alert("Donation amount cannot be negative");
    } else if (isNaN(amount)) {
      return alert("Please input number only");
    } else {
      return alert("Donation amount is exceeding current balance");
    }
  });
