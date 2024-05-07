const displayThankYou = () => {
  const thankYouMessage = document.getElementById("thank-you-message");
  thankYouMessage.style.display = "flex";
};

const hideThankYou = () => {
  const thankYouMessage = document.getElementById("thank-you-message");
  thankYouMessage.style.display = "none";
};

const showEmailPopup = () => {
  const popup = document.getElementById("email-popup");
  popup.style.display = "block";

  const submitButton = document.getElementById("email-submit");
  submitButton.addEventListener("click", function () {
    const emailInput = document.getElementById("email-input");
    const email = emailInput.value;
    if (email !== "") {
      popup.style.display = "none";
      displayThankYou();
      setTimeout(hideThankYou, 2000);
    }
  });

  const closeButton = document.getElementById("email-close");
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });
};

setTimeout(showEmailPopup, 3000);
