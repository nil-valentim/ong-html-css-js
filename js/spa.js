/* =================================================== */
/* 1. DADOS DOS PROJETOS (SIMULAÇÃO DE "BANCO DE DADOS") */
/* =================================================== */

const projetos = [
    {
        id: 'p1',
        nome: 'Capacitação Digital para Idosos',
        descricao: 'Oferece aulas básicas de informática, internet e segurança digital para pessoas acima de 60 anos.',
        meta: 5000,
        arrecadado: 3200,
        // CORREÇÃO DE CAMINHO PARA GITHUB PAGES
        imagem: '/ong-html-css-js/assets/images/idosos.jpg'
    },
    {
        id: 'p2',
        nome: 'Programa de Mentoria de Código',
        descricao: 'Conecta jovens talentos de comunidades carentes com desenvolvedores sêniores do mercado.',
        meta: 8000,
        arrecadado: 1500,
        // CORREÇÃO DE CAMINHO PARA GITHUB PAGES
        imagem: '/ong-html-css-js/assets/images/mentoria.jpg'
    },
    {
        id: 'p3',
        nome: 'Reforma da Biblioteca Comunitária',
        descricao: 'Campanha para modernizar o espaço físico e adquirir novos computadores e livros didáticos.',
        meta: 12000,
        arrecadado: 12000,
        // CORREÇÃO DE CAMINHO PARA GITHUB PAGES
        imagem: '/ong-html-css-js/assets/images/biblioteca.jpg'
    }
];

/* =================================================== */
/* 2. FUNÇÃO DE TEMPLATE (GERA OS CARDS DE PROJETO)     */
/* =================================================== */

function gerarCardsProjetos(lista) {
    // Itera sobre a lista de projetos e transforma cada objeto em uma string HTML
    const cardsHTML = lista.map(projeto => {
        const porcentagem = Math.round((projeto.arrecadado / projeto.meta) * 100);

        return `
            <div class="card col-lg-4 col-md-6">
                <img src="${projeto.imagem}" alt="Imagem do projeto: ${projeto.nome}" class="card-img">
                <div class="card-content">
                    <h3>${projeto.nome}</h3>
                    <p>${projeto.descricao}</p>
                    <p>Meta: R$ ${projeto.meta.toFixed(2).replace('.', ',')}</p>
                    <p>Arrecadado: R$ ${projeto.arrecadado.toFixed(2).replace('.', ',')}</p>
                    
                    <div class="barra-progresso">
                        <div class="progresso-preenchido" style="width: ${porcentagem}%;">
                            ${porcentagem}%
                        </div>
                    </div>
                    
                                        <a href="/ong-html-css-js/cadastro.html" class="btn btn-secondary">Quero Doar</a>
                </div>
            </div>
        `;
    });

    // Junta todas as strings HTML em uma só
    return cardsHTML.join('');
}

/* =================================================== */
/* 3. CONTEÚDO DAS PÁGINAS (TEMPLATES PRINCIPAIS)       */
/* =================================================== */

const templates = {
    'home': `
        <section>
            <h2>Quem Somos e Nossa História</h2>
            <div class="grid">
                <article class="col-lg-8">
                    <h3>Nossa Missão e Visão</h3>
                    <p><strong>Missão:</strong> Promover a inclusão digital e social de jovens em comunidades de baixa renda, oferecendo capacitação em tecnologia e acesso a oportunidades de emprego. </p>
                    <p><strong>Visão:</strong> Ser a principal ponte entre talentos de comunidades carentes e o mercado de trabalho digital no Brasil.</p>
                    <p>A ONG foi fundada em 2018 e desde então dedicamos nossos esforços a Educação, Tecnologia e Inclusão Social.</p>
                </article>
                <div class="col-lg-4">
                                        <img src="/ong-html-css-js/assets/images/equipe-feliz.jpg" alt="Foto da equipe de voluntários da ONG sorrindo." style="width: 100%;">
                </div>
            </div>
        </section>

        <section>
            <h2>Faça a Diferença Conosco</h2>
            <p>Seja nosso parceiro e ajude-nos a ampliar nosso impacto. Explore como você pode contribuir:</p>
            <ul>
                <li><a href="#projetos" class="spa-link">Ver Oportunidades de Voluntariado</a></li>
                <li><a href="#doacao" class="spa-link">Saiba Como Doar</a></li>
            </ul>
        </section>
    `,

    'projetos': `
        <h2>Projetos Atuais e Doações</h2>
        <p class="text-center">Apoie um de nossos projetos sociais e transforme vidas.</p>
        <div class="grid" id="lista-projetos">
                        ${gerarCardsProjetos(projetos)}
        </div>
    `,

    'doacao': `
        <h2>Informações sobre Doação</h2>
        <p>Toda contribuição financeira é revertida integralmente para os projetos sociais. Use o nosso PIX.</p>
        <p><strong>PIX:</strong> 27.982.452/0001-20 (CNPJ)</p>
        <p><a href="#home" class="spa-link">Voltar para a Home</a></p>
    `
};

/* =================================================== */
/* 4. FUNÇÃO DE RENDERIZAÇÃO (Manipulação do DOM)       */
/* =================================================== */

function renderizarConteudo(rota) {
    const mainContent = document.getElementById('main-content');

    // Verifica se a rota existe nos templates; se não, usa 'home' como padrão
    if (templates[rota]) {
        mainContent.innerHTML = templates[rota];
    } else {
        // Rota padrão caso o hash seja inválido
        mainContent.innerHTML = templates['home'];
    }

    // Fecha o menu mobile (se estiver aberto) após clicar em um link
    const mainNavigation = document.getElementById('main-navigation');
    mainNavigation.classList.remove('menu-aberto');

    // Garante que o menu toggle esteja no estado "fechado"
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

/* =================================================== */
/* 5. INICIALIZAÇÃO E EVENT LISTENERS                   */
/* =================================================== */

// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function () {

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.getElementById('main-navigation');

    if (menuToggle && mainNavigation) {
        menuToggle.addEventListener('click', function () {
            // Alterna a classe que mostra/esconde o menu
            mainNavigation.classList.toggle('menu-aberto');

            // Atualiza o ARIA (acessibilidade)
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // --- LÓGICA DE ROTEAMENTO SPA ---

    // Função para ler o HASH da URL e carregar a página
    function carregarRotaPeloHash() {
        // Pega o hash (ex: #projetos), remove o # (fica "projetos")
        // Se for vazio (só o index.html), usa 'home'
        const rota = window.location.hash.substring(1) || 'home';
        renderizarConteudo(rota);
    }

    // 1. Ouve cliques em QUALQUER LUGAR do body (Event Delegation)
    document.body.addEventListener('click', function (event) {
        // Verifica se o clique foi em um link (ou dentro de um link) com a classe 'spa-link'
        const link = event.target.closest('.spa-link');

        if (link) {
            event.preventDefault(); // Impede o navegador de recarregar a página
            const rota = link.getAttribute('href').substring(1); // Pega "projetos" de "#projetos"

            // Atualiza o HASH na URL (isso permite usar os botões Voltar/Avançar)
            window.location.hash = rota;

            // (O 'hashchange' listener abaixo vai cuidar de chamar o renderizarConteudo)
        }
    });

    // 2. Ouve os botões Voltar/Avançar do navegador
    window.addEventListener('hashchange', carregarRotaPeloHash);

    // 3. Carrega a rota correta quando a página é aberta pela primeira vez
    carregarRotaPeloHash();
});