# 📱 Shortcut Launcher App: Plano de Ação (Leap Technology)

Este repositório contém o Plano de Ação detalhado para o desenvolvimento do **Shortcut Launcher App**, um aplicativo Android focado em otimizar a experiência móvel através de acesso rápido e eficiente a atalhos, arquivos (PDF, EPUB) e aplicativos.

O projeto de documentação é construído com **HTML**, **Bootstrap 5.3** e **JavaScript** puro.

## ✨ Funcionalidades Destaque da Documentação

### 🌓 Tema Dinâmico (Dark/Light Mode)

A interface da documentação suporta a alternância entre temas claro e escuro.

- **Tecnologia:** Implementado usando o atributo `data-bs-theme` do Bootstrap 5.3 e JavaScript para persistir a preferência no `localStorage`.
- **Comportamento:** O ícone na barra de navegação (Sol/Lua) alterna automaticamente com o clique, refletindo o tema para o qual o usuário pode mudar.

### 🧭 Navegação Otimizada

O menu de navegação responsivo (Navbar) permite saltar rapidamente para qualquer **Fase** ou o **Cronograma** do projeto usando links de ancoragem com rolagem suave (smooth scroll).

## 🛠️ Tecnologias Principais (Plataforma Android)

O projeto do aplicativo será desenvolvido usando as seguintes tecnologias:

| Categoria        | Tecnologia                  | Uso Principal                                                             |
| :--------------- | :-------------------------- | :------------------------------------------------------------------------ |
| **Framework**    | **Jetpack Compose**         | Construção da UI nativa para Android.                                     |
| **Linguagem**    | **Kotlin**                  | Linguagem de programação principal.                                       |
| **Persistência** | **DataStore**               | Armazenamento assíncrono e persistente de atalhos e progresso de leitura. |
| **Arquivos**     | `android-pdf-viewer`        | Visualização de arquivos PDF.                                             |
| **UX/UI**        | **Accompanist Permissions** | Gerenciamento de permissões de acesso ao armazenamento.                   |

## 📐 Estrutura do Projeto de Documentação

A estrutura de arquivos principal desta documentação é a seguinte:

```text
.
├── index.html        # Estrutura principal da documentação
├── style/
│   └── style.css     # Estilos personalizados e regras de Tema Escuro
└── js/
    └── script.js     # Lógica de Dark/Light Mode e inicialização do Modal
```
