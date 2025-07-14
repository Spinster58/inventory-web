
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid login!";
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

window.addEventListener("load", () => {
  if (document.getElementById("visit-count")) {
    let visits = localStorage.getItem("visits") || 0;
    visits++;
    localStorage.setItem("visits", visits);
    document.getElementById("visit-count").innerText = "Visits: " + visits;
  }
});
