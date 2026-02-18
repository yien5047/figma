document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("createAccountForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple feedback for demonstration
    console.log("Form Submitted:", { fullName, email, password });
    alert(`Account created for ${fullName}! (This is a demonstration)`);
  });

  // Social login click handlers (demonstration)
  const socialButtons = document.querySelectorAll(".btn-social");
  socialButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const platform = btn.querySelector("span").innerText.split(" ").pop();
      alert(`Redirecting to ${platform} login...`);
    });
  });
});
