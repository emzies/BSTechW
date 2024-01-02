document.addEventListener("DOMContentLoaded", function () {
     const services = document.querySelectorAll(".service");
     const descriptions = document.querySelectorAll(".description");
 
     services.forEach((service, index) => {
         service.addEventListener("click", function () {
             // Hide all descriptions
             descriptions.forEach(desc => {
                 desc.style.display = "none";
             });
 
             // Toggle the display of the clicked service's description
             descriptions[index].style.display = "block";
         });
     });
 });

 function toggleNav() {
    var navList = document.getElementById("navList");
    navList.classList.toggle("show");
  }
  
  // Close nav links after clicking a link
  document.querySelectorAll(".nav-links ul li a").forEach(function(link) {
    link.addEventListener("click", function() {
      var navList = document.getElementById("navList");
      navList.classList.remove("show");
    });
  });
 