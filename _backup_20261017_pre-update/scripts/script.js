document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  let activeFound = false;

  navItems.forEach(item => {
    if (item.href === window.location.href) {
      item.classList.add('active');
      activeFound = true;
    }

    item.addEventListener('click', function () {
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // If no active item is found, set the first nav item as active
  if (!activeFound) {
    navItems[0].classList.add('active');
  }
});
