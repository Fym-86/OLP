// 处理导航栏的功能，如高亮显示当前页面等
document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll("nav ul li a");
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].classList.add("active");
    }
  }
});
