document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.style.display = "none";
    thankYouMessage.style.display = "block";
  });
});
