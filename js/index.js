function changePageToFAQ() {
  window.location.href = "./faq.html";
}

function changePageToHome() {
  window.location.href = "./index.html";
}

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
