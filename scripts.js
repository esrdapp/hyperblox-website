document.addEventListener("DOMContentLoaded", function () {
  // Get the current year
  var currentYear = new Date().getFullYear();

  // Update the year in the span element with class "year"
  document.querySelector(".year").textContent = currentYear;

  // Add event listener to the playVideoBtn button
  document
    .getElementById("playVideoBtn")
    .addEventListener("click", function () {
      // Create the iframe
      var iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/tuDu22bivkE?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1"
      );
      iframe.setAttribute("width", "960");
      iframe.setAttribute("height", "540");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "autoplay; fullscreen");

      // Append the iframe to the container
      document.getElementById("videoContainer").appendChild(iframe);

      // Optionally, hide the button after clicking
      this.style.display = "none";
    });

  // Smooth scrolling to sections
  var links = document.querySelectorAll(".menu a");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        event.preventDefault(); // Prevent scrolling if smooth scrolling is not supported
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

var languageOptions = document.querySelectorAll(".language-option");
languageOptions.forEach(function (option) {
  option.addEventListener("click", function (event) {
    event.preventDefault();
    var selectedLang = this.dataset.lang;
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu-list");
  const burger = document.querySelector(".burger-menu");
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}
