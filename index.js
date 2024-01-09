document.addEventListener("DOMContentLoaded", function () {
  const descriptions = document.querySelectorAll(".description-container");

  // Set the first service description to be visible by default
  descriptions[0].classList.add("visible");

  const services = document.querySelectorAll(".service");

  services.forEach((service, index) => {
    service.addEventListener("click", function () {
      // Hide all descriptions
      descriptions.forEach((desc) => {
        desc.classList.remove("visible");
      });

      // Toggle the display of the clicked service's description
      descriptions[index].classList.add("visible");
    });
  });
});

function toggleNav() {
  var navList = document.getElementById("navList");
  navList.classList.toggle("show");
}

// Close nav links after clicking a link
document.querySelectorAll(".nav-links ul li a").forEach(function (link) {
  link.addEventListener("click", function () {
    var navList = document.getElementById("navList");
    navList.classList.remove("show");
  });
});
