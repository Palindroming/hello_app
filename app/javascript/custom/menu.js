document.addEventListener("turbo:load", function() {
  let account = document.querySelector("#account");
  if (account) {
    account.addEventListener("click", function(event) {
      event.preventDefault();
      let menu = account.nextElementSibling;
      menu.classList.toggle("show");
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener("click", function(event) {
    let dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(event.target)) {
      let menu = dropdown.querySelector(".dropdown-menu");
      if (menu) menu.classList.remove("show");
    }
  });
});
