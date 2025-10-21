
**Disciplina:** Desenvolvimento Front-End
**Curso:** Análise e Desenvolvimento de Sistemas
**Instituição:** Universidade Cruzeiro do Sul
**Aluno:** Nilson José Valentim

-# Projeto 4: Conecta Futuro (Site Institucional ONG)

Este é o projeto final do curso de Desenvolvimento Front-End, focado na criação de um site institucional acessível, otimizado e profissional para uma ONG fictícia, "Conecta Futuro". O projeto consolida conhecimentos em HTML, CSS, JavaScript, GitFlow e práticas de acessibilidade (WCAG 2.1).

**Link para o site:** **https://nil-valentim.github.io/ong-html-css-js/**

---

## 🚀 Funcionalidades Principais

Este projeto foi dividido em quatro entregas principais, culminando no site atual:

* **Atividade 1 (HTML):** Estruturação semântica inicial do conteúdo (Arquivos em `/Atividade-1`).
* **Atividade 2 (CSS):** Estilização completa do site, tornando-o responsivo (Arquivos em `/Atividade-2`).
* **Atividade 3 (JavaScript):**
    * **Single Page Application (SPA):** A navegação principal (Início, Projetos) é dinâmica e não recarrega a página, usando JavaScript para renderizar templates.
    * **Validação de Formulários:** O formulário de "Cadastro/Login" possui validação de campos (Nome, CPF, E-mail) implementada em JavaScript, informando o usuário sobre erros de preenchimento.
* **Atividade 4 (Profissionalização):**
    * **Acessibilidade (WCAG 2.1):** Implementação de atributos ARIA para leitores de tela, navegação por teclado, correção de contraste de cores e um **Modo Escuro** automático (`prefers-color-scheme`).
    * **Otimização:** Minificação de todos os arquivos CSS e JS (`.min` versions) e compressão de todas as imagens para um carregamento mais rápido.
    * **GitFlow:** Todo o desenvolvimento foi feito seguindo práticas profissionais de versionamento, com branches `main`, `develop` e `feature/*`, além de Pull Requests documentados.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Utilizado com foco em semântica (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, atributos ARIA).
* **CSS3:** Utilizado com Flexbox, Grid, Variáveis CSS, Media Queries para responsividade e `prefers-color-scheme` para Modo Escuro.
* **JavaScript (ES6+):** Utilizado para manipulação do DOM, eventos, validação de formulários e lógica da SPA.
* **Git & GitHub:** Utilizado para todo o controle de versão seguindo o fluxo GitFlow (Branches, Commits Semânticos, Pull Requests, Issues).
* **GitHub Pages:** Utilizado para o deploy e hospedagem do site.
* **Ferramentas de Otimização:** Extensões do VS Code (Minify, TinyPNG) foram usadas para minificação e compressão.

---

## 📁 Estrutura do Repositório

O repositório está organizado da seguinte forma:
-- /Atividade-1 (Código da primeira entrega) 
-- /Atividade-2 (Código da segunda entrega) 
-- /assets/images (Imagens comprimidas do site principal) 
-- /js 
-- formValidation.js (Lógica do formulário) 
-- formValidation.min.js (Versão minificada) 
-- spa.js (Lógica da SPA)
-- spa.min.js (Versão minificada)
-- cadastro.html (Página de Cadastro e Login)
-- index.html (Página principal - A "casca" da SPA)
-- style.css (Arquivo de estilo principal)
-- style.min.css (Versão minificada do estilo) 
-- README.md (Esta documentação)

## 🚀 Como Executar o Projeto Localmente

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/nil-valentim/ong-html-css-js.git](https://github.com/nil-valentim/ong-html-css-js.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd ong-html-css-js
    ```
3.  Abra o arquivo `index.html` no seu navegador. (Ou, se você usa o VS Code, utilize a extensão "Live Server").

---

## 👨‍💻 Autor

* **Nilson Valentim**
    * GitHub: [@nil-valentim](https://github.com/nil-valentim)