// document.addEventListener("DOMContentLoaded", function () {
//   var playVideoBtn = document.getElementById("playVideoBtn");
//   if (playVideoBtn) {
//     playVideoBtn.addEventListener("click", function () {
//       var videoContainer = document.getElementById("videoContainer");
//       if (videoContainer) {
//         // Create the iframe
//         var iframe = document.createElement("iframe");
//         iframe.setAttribute(
//           "src",
//           "https://www.youtube.com/embed/tuDu22bivkE?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1"
//         );
//         iframe.setAttribute("width", "960");
//         iframe.setAttribute("height", "540");
//         iframe.setAttribute("frameborder", "0");
//         iframe.setAttribute("allow", "autoplay; fullscreen");

//         // Append the iframe to the container
//         videoContainer.appendChild(iframe);

//         // Optionally, hide the button after clicking
//         playVideoBtn.style.display = "none";
//       }
//     });
//   }

//   // Smooth scrolling to sections
//   var links = document.querySelectorAll(".menu a");
//   links.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       var targetId = this.getAttribute("href").substring(1);
//       var targetElement = document.getElementById(targetId);
//       if (targetElement) {
//         event.preventDefault(); // Prevent scrolling if smooth scrolling is not supported
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     });
//   });

//   // Toggle language dropdown
//   var languageSelector = document.getElementById("languageSelector");
//   var languageDropdown = document.getElementById("languageDropdown");
//   if (languageSelector && languageDropdown) {
//     languageSelector.addEventListener("click", function () {
//       languageDropdown.style.display =
//         languageDropdown.style.display === "block" ? "none" : "block";
//     });

//     var languageOptions = document.querySelectorAll(".language-option");
//     languageOptions.forEach(function (option) {
//       option.addEventListener("click", function (event) {
//         event.preventDefault();
//         var selectedLang = this.dataset.lang;
//       });
//     });
//   }
// });

// // Toggle menu function
// function toggleMenu() {
//   const menu = document.querySelector(".menu-list");
//   const burger = document.querySelector(".burger-menu");
//   burger.classList.toggle("active");
//   menu.classList.toggle("active");
// }

document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the button and the video container
  var button = document.getElementById("myButton");
  var videoContainer = document.querySelector(".video-container"); // Use querySelector to select by class

  // Add click event listener to the button
  button.addEventListener("click", function () {
    // Hide the button
    button.style.display = "none";

    // Create an iframe element for the YouTube video
    var iframe = document.createElement("iframe");
    iframe.setAttribute("width", "960");
    iframe.setAttribute("height", "540");
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/tuDu22bivkE?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("allow", "autoplay"); // Allow autoplay

    // Append the iframe to the video container
    videoContainer.appendChild(iframe);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all links in the menu list
  var links = document.querySelectorAll(".menu-list a");

  // Add click event listener to each link
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent default behavior of link click
      event.preventDefault();

      // Get the target element's id from the href attribute
      var targetId = link.getAttribute("href").substring(1);

      // Find the target element in the document
      var targetElement = document.getElementById(targetId);

      // Scroll to the target element smoothly
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
});
