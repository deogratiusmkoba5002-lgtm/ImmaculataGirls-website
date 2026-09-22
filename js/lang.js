(() => {
  const STORAGE_KEY = "siteLang";
  const body = document.body;
  const toggleBtn = document.querySelector("#lang-toggle");

  function applyLang(lang) {
    document.querySelectorAll("[data-en]").forEach(el => {
      el.textContent = el.dataset[lang] || el.dataset.en;
    });
    body.dataset.lang = lang;
    if (toggleBtn) toggleBtn.textContent = lang === "en" ? "SW" : "EN";
    localStorage.setItem(STORAGE_KEY, lang);
  }

  applyLang(localStorage.getItem(STORAGE_KEY) || "en");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = localStorage.getItem(STORAGE_KEY) || "en";
      applyLang(current === "en" ? "sw" : "en");
    });
  }
})();