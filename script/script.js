// Toggle RTL and LTR direction
const toggleDirection = () => {
  const htmlElement = document.documentElement;
  htmlElement.dir = htmlElement.dir === "ltr" ? "rtl" : "ltr";
};

document
  .querySelector(".wss_btn-toggle-dir")
  .addEventListener("click", toggleDirection);

// Toggle Sidebar Visibility
// const toggleSidebar = () => {
//   const sidebar = document.querySelector(".wss_sidebar");
//   sidebar.classList.toggle("visible");
// };

// // Attach Click Event to Sidebar Toggle Button
// document
//   .querySelector(".wss_btn-toggle-sidebar")
//   .addEventListener("click", toggleSidebar);
