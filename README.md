# 🎨 [DEV] Atividade 2: Design System e Layout Responsivo (CSS3)

**Disciplina:** Desenvolvimento Front-End
**Curso:** Análise e Desenvolvimento de Sistemas
**Instituição:** Universidade Cruzeiro do Sul
**Aluno:** Nilson José Valentim

---

## 🎯 Objetivo da Entrega

Esta fase teve como objetivo transformar a estrutura HTML da Entrega 1 em uma interface visual completa, profissional e **totalmente responsiva** (Mobile-First), aplicando conceitos modernos de CSS3, Design System e usabilidade.

## 🌟 Destaques e Requisitos Cumpridos

### 1. Design System Completo

O projeto utiliza **Variáveis CSS Custom Properties (`:root`)** para centralizar todos os tokens de design:
* **Paleta Vibrante:** Uso de Laranja/Coral (Ação) e Roxo (Tecnologia/Links) para uma identidade visual moderna.
* **Tipografia Hierárquica** (5 tamanhos em `rem`).
* **Espaçamento Modular** (Múltiplos de 8px: `var(--espaco-sm)`, etc.).

### 2. Layouts e Responsividade (Mobile-First)

* **Grid System:** Implementação de um **Grid Customizado de 12 Colunas** (`.grid`, `.col-lg-X`) usado para alinhar texto e imagens (`index.html`) e organizar os Cards de Projeto.
* **Layout Adaptativo:** Uso de **5 Media Queries** (`@media`) para garantir a responsividade em celulares, tablets e desktops (Mobile-First).
* **Cards Responsivos:** Componente de projeto (`.card`) que se adapta de 1 coluna (mobile) a 4 colunas (desktop) utilizando Flexbox interno e Grid externo.

### 3. Componentes e Interatividade

* **Menu Responsivo:** Estilização da navegação (`<nav>`) para que os links pareçam botões e uso de estrutura para **Menu Hambúrguer** no mobile (Pronto para o JS).
* **Botões com Estado:** Uso de `transition` e pseudo-classes (`:hover`, `:active`) em botões Primários e Secundários.
* **Validação Visual:** Estilização de formulários que fornece feedback visual (`border-color`) para campos válidos e inválidos.

---

## ✅ Status de Validação

Todos os arquivos HTML (`index.html`, `projetos.html`, `cadastro.html`) foram validados com sucesso no W3C Markup Validation Service.
