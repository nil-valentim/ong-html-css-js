// Dados dos Projetos
const projetos = [
    {
        id: 'p1',
        nome: 'Capacitação Digital para Idosos',
        descricao: 'Oferece aulas básicas de informática, internet e segurança digital para pessoas acima de 60 anos.',
        meta: 5000,
        arrecadado: 3200,
        imagem: 'assets/images/idosos.jpg'
    },
    {
        id: 'p2',
        nome: 'Programa de Mentoria de Código',
        descricao: 'Conecta jovens talentos de comunidades carentes com desenvolvedores sêniores do mercado.',
        meta: 8000,
        arrecadado: 1500,
        imagem: 'assets/images/mentoria.jpg'
    },
    {
        id: 'p3',
        nome: 'Reforma da Biblioteca Comunitária',
        descricao: 'Campanha para modernizar o espaço físico e adquirir novos computadores e livros didáticos.',
        meta: 12000,
        arrecadado: 12000, 
        imagem: 'assets/images/biblioteca.jpg'
    }
];

// Função que gera o HTML dos Cards
function gerarCardsProjetos(lista) {
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
                    
                    <div style="background-color: #e0e0e0; border-radius: 4px; overflow: hidden; margin: 10px 0;">
                        <div style="width: ${porcentagem}%; background-color: var(--cor-secundaria-base); height: 20px; text-align: center; color: white;">
                            ${porcentagem}%
                        </div>
                    </div>
                    
                    <a href="cadastro.html" class="btn btn-secondary">Quero Doar</a>
                </div>
            </div>
        `;
    });
    
    return cardsHTML.join(''); 
}

// Objeto de Templates
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
                    <img src="assets/images/equipe-feliz.jpg" alt="Foto da equipe de voluntários da ONG sorrindo." style="width: 100%;">
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

    'cadastro': `
        <p class="text-center">Por favor, utilize o link direto para o <a href="cadastro.html">Formulário de Cadastro/Login</a>.</p>
    `
};

// Função de RENDERIZAÇÃO
function renderizarConteudo(rota) {
    const mainContent = document.getElementById('main-content');
    
    if (templates[rota]) {
        mainContent.innerHTML = templates[rota];
    } else {
        mainContent.innerHTML = `<h2>Página Não Encontrada</h2>`;
    }
}

// Inicialização do SPA (Carrega a Home ao abrir o index.html)
renderizarConteudo('home');

// Lógica de ROTEAMENTO SPA (Ouve cliques nos links)
document.addEventListener('DOMContentLoaded', function() {
    const spaLinks = document.querySelectorAll('.spa-link'); 

    spaLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const rota = this.getAttribute('href').substring(1); 
            renderizarConteudo(rota);
        });
    });
});