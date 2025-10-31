document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement; // A tag <html>
  const themeIcon = themeToggle.querySelector("i");

  // Inicializa o modal do Bootstrap
  const welcomeModal = new bootstrap.Modal(
    document.getElementById("welcomeModal")
  );

  /**
   * Atualiza o ícone do botão de toggle.
   * Se o tema atual é 'dark', mostra o SOL (sugere mudar para claro).
   * Se o tema atual é 'light', mostra a LUA (sugere mudar para escuro).
   * @param {string} theme - O tema atual ('light' ou 'dark').
   */
  function updateThemeIcon(theme) {
    // Remove ambas as classes para evitar conflitos visuaisBem-vindo ao Projeto Shortcut Launcher App! 
    themeIcon.classList.remove("bi-sun-fill", "bi-moon-fill");

    if (theme === "dark") {
      // Tema atual é ESCURO -> Sugere CLARO
      themeIcon.classList.add("bi-sun-fill");
      themeToggle.setAttribute("aria-label", "Alternar para Tema Claro");
    } else {
      // Tema atual é CLARO -> Sugere ESCURO
      themeIcon.classList.add("bi-moon-fill");
      themeToggle.setAttribute("aria-label", "Alternar para Tema Escuro");
    }
  }

  /**
   * Define o tema global e salva no localStorage.
   * @param {string} theme - O novo tema ('light' ou 'dark').
   */
  function setTheme(theme) {
    htmlElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    updateThemeIcon(theme); // Sincroniza o ícone
  }

  // 1. INICIALIZAÇÃO: Carrega tema salvo ou usa 'light' como padrão
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  // 2. LÓGICA DO TOGGLE (Alternar)
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });

  // 3. Mostrar o modal automaticamente
  welcomeModal.show();
});
