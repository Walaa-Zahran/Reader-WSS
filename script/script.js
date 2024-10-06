// Toggle RTL and LTR direction
const toggleDirection = () => {
  const htmlElement = document.documentElement;
  htmlElement.dir = htmlElement.dir === "ltr" ? "rtl" : "ltr";
};

document
  .querySelector(".wss_btn-toggle-dir")
  .addEventListener("click", toggleDirection);

// Toggle Sidebar Visibility
const toggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar-nav");
  sidebar.classList.toggle("d-none");
};

// Attach Click Event to Sidebar Toggle Button
document
  .querySelector(".wss_img-logo")
  .addEventListener("click", toggleSidebar);
