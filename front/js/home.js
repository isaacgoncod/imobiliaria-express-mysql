function logoff() {
  localStorage.removeItem("corretor");

  window.location.href = "../pages/login.html";
}
