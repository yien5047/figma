document.addEventListener("DOMContentLoaded", () => {
  // ── Dark Mode Toggle ──────────────────────────────────
  const html = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");

  // 決定初始主題：localStorage > 系統偏好 > 預設 light
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    toggleBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "切換淺色模式" : "切換深色模式",
    );
    localStorage.setItem("theme", theme);
  }

  applyTheme(initialTheme);

  toggleBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  // 監聽系統主題變更（僅在使用者未手動設定時生效）
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
  // ─────────────────────────────────────────────────────

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
