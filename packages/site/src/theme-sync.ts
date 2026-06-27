// Espelha o tema do Starlight (data-theme) para a classe .dark do design system.
function sync() {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
}

sync();
new MutationObserver(sync).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"],
});
