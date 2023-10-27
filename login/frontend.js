document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userType = document.querySelector(
      'input[name="user-type"]:checked'
    ).value;

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, userType }),
    });

    const data = await response.json();
    if (data.success) {
      // If login is successful, redirect to the appropriate page
      if (userType === "admin") {
        window.location.href = "admin.html";
      } else if (userType === "faculty") {
        window.location.href = "form.html";
      }
    } else {
      alert(data.message);
      if (data.reset) {
        loginForm.reset(); // This will reset the form fields
      }
    }
  });
});
