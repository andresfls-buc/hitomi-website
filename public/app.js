document.addEventListener("DOMContentLoaded", function () {
  var dropdownContent = document.getElementById("dropdownContent");
  var hamburgerIcon = document.querySelector(".icon-hamburger");
  var closeIcon = document.querySelector(".icon-close");

  function toggleMenu() {
    dropdownContent.classList.toggle("show");

    if (dropdownContent.classList.contains("show")) {
      hamburgerIcon.style.display = "none";
      closeIcon.style.display = "inline";
    } else {
      hamburgerIcon.style.display = "inline";
      closeIcon.style.display = "none";
    }
  }

  function closeMenu() {
    dropdownContent.classList.remove("show");
    hamburgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }

  // Initialize icon visibility
  if (dropdownContent.classList.contains("show")) {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "inline";
  } else {
    hamburgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }

  // Event listener for the hamburger icon
  document.querySelector(".hamburger").addEventListener("click", toggleMenu);

  // Close the dropdown menu if window is resized above the breakpoint
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});
