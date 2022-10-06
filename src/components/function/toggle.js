export default function toggle() {
  const menuRight = document.querySelector(".menu_right");
  const cssDescription = document.querySelector(".css100_description");
  menuRight.addEventListener("click", () => {
    cssDescription.classList.toggle("active");
    menuRight.classList.toggle("rotate");
  });
}
