// Toggle Menu
document.getElementById("menu-btn").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex"); // Add this line to make the menu display as flex when visible
});
  
  // Tabs functionality
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.add("hidden");
      });
      document.getElementById(this.getAttribute("data-tab")).classList.remove("hidden");
  
      document.querySelectorAll(".tab").forEach((t) => {
        t.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
  
  // Smooth Scrolling for anchor links
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for the fixed header
      behavior: "smooth",
    });
  };
  
  // Add smooth scrolling to menu links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute("href"));
    });
  });
  
  // Modal Toggle
  document.getElementById("contact-modal-btn").addEventListener("click", function () {
    document.getElementById("contact-modal").classList.remove("hidden");
  });
  
  document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("contact-modal").classList.add("hidden");
  });
  
  // Handle form submission (add this if you want to prevent default action)
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your form submission logic here
    alert("Your message has been sent!");
    this.reset();
    document.getElementById("contact-modal").classList.add("hidden");
  });
  