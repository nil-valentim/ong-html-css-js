# 🎨 [DEV] Atividade 2: Design System e Layout Responsivo (CSS3)

**Disciplina:** Desenvolvimento Front-End
**Curso:** Análise e Desenvolvimento de Sistemas
**Instituição:** Universidade Cruzeiro do Sul
**Aluno:** Nilson José Valentim

---

# 🚀 Entrega III - Interatividade e Funcionalidades (Projeto Ong Conecta Futuro)

**Disciplina:** Desenvolvimento Front-End | **Curso:** Análise e Desenvolvimento de Sistemas | **Instituição:** Universidade Cruzeiro do Sul | **Aluno:** Nilson José Valentim

---

## 🎯 Objetivo da Entrega

Este projeto transforma a interface estática anterior em uma **Aplicação Web Dinâmica e Interativa** utilizando JavaScript, focando em manipulação do DOM, roteamento e templates.

## ✨ Destaques e Requisitos Cumpridos

### 1. Manipulação do DOM e SPA (Single Page Application)
- **SPA Básico:** Implementação de um sistema de roteamento utilizando JavaScript (`js/spa.js`) para trocar o conteúdo do contêiner principal (`<main id="main-content">`) sem recarregar a página.
- **Roteamento:** O clique nos links de navegação (`<a class="spa-link">`) é interceptado por um `eventListener` e a rota é renderizada dinamicamente.
- **Menu Mobile:** O menu hambúrguer é funcional, utilizando JavaScript para alternar a classe `menu-aberto` no `<nav>`, garantindo a usabilidade em dispositivos móveis.

### 2. Sistema de Templates JavaScript
- **Geração Dinâmica:** O conteúdo da página "Projetos e Doações" é gerado dinamicamente no `js/spa.js`.
- **Estrutura de Dados:** Utilização de um `Array de Objetos` (`const projetos`) como fonte de dados.
- **Renderização:** O método `Array.prototype.map()` é usado para iterar sobre os dados e construir os *cards* de projeto (Template Strings), injetando o HTML final na página.

### 3. Validação de Formulário (Consistência de Dados)
- **Arquivo:** `js/formValidation.js`
- **Controle Total:** A validação nativa do HTML5 foi desativada (`novalidate`), permitindo que o JavaScript assuma 100% da checagem de consistência.
- **Verificação Lógica:** Regras implementadas para campos cruciais:
    - **Nome:** Checagem de preenchimento e tamanho mínimo.
    - **CPF:** Checagem de preenchimento e tamanho exato (14 caracteres).
    - **E-mail:** Checagem de preenchimento e presença do caractere `@`.
- **Aviso ao Usuário (Feedback Visual):** Em caso de erro, o script injeta mensagens específicas (`<span class="erro-mensagem">`) ao lado do campo, e aplica borda de erro visual (`.invalido`).

### 4. Código JavaScript Modular
- O código está organizado em arquivos distintos por funcionalidade na pasta `js/`:
    - `js/spa.js`: Roteamento, Templates e Lógica do Menu Mobile.
    - `js/formValidation.js`: Lógica de Eventos e Validação de Formulário.

---

## 🛠️ Como Visualizar

O projeto está configurado para ser visualizado via GitHub Pages.

---
