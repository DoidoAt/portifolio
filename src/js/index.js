const btnMostrarCertificados = document.querySelector('.btn-mostrar-certificados');
const btnLang = document.querySelector(".btn-lang");

const translations = {
  pt: {
    // HEADER
    "cabecaolho.experiencia": "Experiência",
    "cabecaolho.projetos": "Projetos",
    "cabecaolho.tecnologias": "Tecnologias",
    "cabecaolho.certificados": "Certificados",
    "btn.lang": "PT / EN",

    // HOME
    "home.title": "Engenheiro Backend | ERP, Integrações e Sistemas Financeiros",
    "home.p1": "Bacharel em Ciência da Computação pela UEM, atuo como engenheiro backend em sistemas ERP, com foco em integrações entre sistemas corporativos, marketplaces e instituições financeiras.",
    "home.p2": "Experiência em ambientes de alta criticidade, automatizando fluxos de vendas, logística e conciliação financeira em produção.",
    "home.li1": "✔ Desenvolvimento e evolução de sistemas ERP em produção",
    "home.li2": "✔ Integração com APIs de marketplaces e bancos",
    "home.li3": "✔ Modelagem e otimização de dados com PostgreSQL",
    "home.li4": "✔ Garantia de consistência em fluxos transacionais críticos",
    "home.p3": "Foco em engenharia de software aplicada a sistemas reais, priorizando confiabilidade, integridade de dados e regras de negócio complexas.",
    "home.p4": "Também sou fã de jogos, filmes, séries e meus gatitos 💕",

    "contact.email": "Falar por e-mail",
    "contact.whatsapp": "Falar no WhatsApp",

    // EXPERIÊNCIA
    "exp.title": "Experiência Profissional",
    "exp.h1": "ERP & Integrações Corporativas",
    "exp.span1": "Backend Developer • Accion Sistemas",
    "exp.span2": "Ago 2024 – Atual",
    "exp.p1": "Engenharia de integrações para um ERP em produção, conectando sistemas críticos de vendas, logística e financeiro com marketplaces e instituições bancárias.",
    "exp.h2": "⚙️ Problema",
    "exp.h3": "🔗 Solução",
    "exp.h4": "🏗 Arquitetura",
    "exp.h5": "📈 Impacto",

    "exp.li1": "Processos manuais em operações críticas",
    "exp.li2": "Inconsistência entre ERP e sistemas externos",
    "exp.li3": "Falta de automação em fluxos financeiros e fiscais",
    "exp.li4": "Integração com Mercado Livre via API",
    "exp.li5": "Automação de pedidos, faturamento e logística",
    "exp.li6": "Integração bancária (boletos, PIX, DDA)",
    "exp.li7": "Processamento assíncrono com threads",
    "exp.li8": "APIs REST + Web Services",
    "exp.li9": "PostgreSQL em operações transacionais",
    "exp.li10": "Automação de fluxos críticos do ERP",
    "exp.li11": "Redução de tarefas manuais",
    "exp.li12": "Maior consistência entre sistemas",

    // PROJETOS
    "proj.title": "Projetos",
    "proj.intro": "Integrações de sistemas ERP com foco em automação de processos críticos entre e-commerce e instituições financeiras.",
    "proj.h1": "Integração com Mercado Livre",
    "proj.span1": "Automação de pipeline de vendas (pedido → faturamento → logística → fiscal)",
    "proj.p2": "Sistema de integração entre ERP e Mercado Livre responsável por automatizar todo o ciclo de vendas.",
    "proj.h2": "Integrações Bancárias",
    "proj.span2": "Automação de operações financeiras no ERP",
    "proj.p3": "Integração entre ERP e instituições financeiras para automação de boletos, PIX e conciliação.",
    "proj.apiBanc": "APIs Bancárias",
    "proj.Financ": "Financeiro",

    // TECNOLOGIAS
    "tech.title": "Tecnologias",
    "tech.h1": "Banco de Dados",
    "tech.h2": "Integrações",
    "tech.h3": "Engenharia de Software",
    "tech.model": "Modelagem",
    "tech.query": "Queries Complexas",
    "tech.ML": "Mercado Livre API",
    "tech.apiBanc": "APIs Bancárias",
    "tech.regraNe": "Regras de Negócio",
    "tech.Perf": "Performance",
    "tech.system": "Sistemas Críticos",

    // CERTIFICADOS
    "cert.title": "Meus Certificados",
    "cert.h1": "Certificado de Conclusão do Curso de Bacharelado em Ciência da Computação - Universidade Estadual de Maringá",
    "cert.h2": "Certificado de Conclusão do Curso de Inglês Avançado - MACRO Idiomas",
    "cert.h3": "Certificado de Conclusão do curso Versionamento de Código com Git e GitHub - DIO",
    "cert.h4": "Certificado de Participação da Imersão Front-End - Alura",
    "cert.h5": "Certificado de Conclusão do curso Santander 2024-Criando Jogos com Godot - DIO",
    "cert.p1": "🔗 Ver em PDF",
    "cert.mais": "Mostrar Mais"
  },

  en: {
    // HEADER
    "cabecaolho.experiencia": "Experience",
    "cabecaolho.projetos": "Projects",
    "cabecaolho.tecnologias": "Technologies",
    "cabecaolho.certificados": "Certificates",
    "btn.lang": "PT / EN",

    // HOME
    "home.title": "Backend Engineer | ERP, Integrations & Financial Systems",
    "home.p1": "Computer Science graduate from UEM, I work as a backend engineer in ERP systems, focused on integrations between corporate systems, marketplaces and financial institutions.",
    "home.p2": "Experience in high-critical environments, automating sales, logistics and financial reconciliation workflows in production.",
    "home.li1": "✔ Development and evolution of ERP systems in production",
    "home.li2": "✔ Integration with marketplace and banking APIs",
    "home.li3": "✔ Data modeling and optimization with PostgreSQL",
    "home.li4": "✔ Ensuring consistency in critical transactional flows",
    "home.p3": "Focus on software engineering applied to real systems, prioritizing reliability, data integrity and complex business rules.",
    "home.p4": "Also a fan of games, movies, series and my cats 💕",

    "contact.email": "Contact by email",
    "contact.whatsapp": "Contact on WhatsApp",

    // EXPERIENCE
    "exp.title": "Professional Experience",
    "exp.h1": "ERP & Corporate Integrations",
    "exp.span1": "Backend Developer • Accion Sistemas",
    "exp.span2": "Aug 2024 – Present",
    "exp.p1": "Integration engineering for a production ERP, connecting critical sales, logistics and financial systems with marketplaces and banks.",
    "exp.h2": "⚙️ Problem",
    "exp.h3": "🔗 Solution",
    "exp.h4": "🏗 Architecture",
    "exp.h5": "📈 Impact",

    "exp.li1": "Manual processes in critical operations",
    "exp.li2": "Inconsistency between ERP and external systems",
    "exp.li3": "Lack of automation in financial and fiscal flows",
    "exp.li4": "Integration with Mercado Livre via API",
    "exp.li5": "Automation of orders, invoicing and logistics",
    "exp.li6": "Bank integration (billing, PIX, DDA)",
    "exp.li7": "Asynchronous processing with threads",
    "exp.li8": "REST APIs + Web Services",
    "exp.li9": "PostgreSQL in transactional operations",
    "exp.li10": "Automation of critical ERP flows",
    "exp.li11": "Reduction of manual tasks",
    "exp.li12": "Improved system consistency",

    // PROJECTS
    "proj.title": "Projects",
    "proj.intro": "ERP system integrations focused on automating critical processes between e-commerce and financial institutions.",
    "proj.h1": "Mercado Livre Integration",
    "proj.span1": "Sales pipeline automation (order → invoicing → logistics → fiscal)",
    "proj.p2": "ERP integration system with Mercado Livre responsible for automating the entire sales cycle.",
    "proj.h2": "Bank Integrations",
    "proj.span2": "Financial automation in ERP",
    "proj.p3": "Integration between ERP and financial institutions for billing, PIX and reconciliation automation.",
    "proj.apiBanc": "Bank APIs",
    "proj.Financ": "Financial",

    // TECH
    "tech.title": "Technologies",
    "tech.h1": "Database",
    "tech.h2": "Integrations",
    "tech.h3": "Software Engineering",
    "tech.model": "Modeling",
    "tech.query": "Complex Queries",
    "tech.ML": "Mercado Livre API",
    "tech.apiBanc": "Bank APIs",
    "tech.regraNe": "Business Rules",
    "tech.Perf": "Performance",
    "tech.system": "Critical Systems",

    // CERTIFICATES
    "cert.title": "My Certificates",
    "cert.h1": "Bachelor’s Degree in Computer Science - State University of Maringá",
    "cert.h2": "Advanced English Course Certificate - MACRO Idiomas",
    "cert.h3": "Version Control with Git and GitHub - DIO",
    "cert.h4": "Front-End Immersion Participation - Alura",
    "cert.h5": "Santander 2024 - Game Development with Godot - DIO",
    "cert.p1": "🔗 View PDF",
    "cert.mais": "Show More"
  }
};

let currentLang = "pt";

esconderBotaoCertificado(document.querySelectorAll('.certificado:not(.ativo)').length);

btnMostrarCertificados?.addEventListener('click', () => {
    const certificadosInativos = document.querySelectorAll('.certificado:not(.ativo)');
    let mostrar = Math.min(4, certificadosInativos.length);

    for (let i = 0; i < mostrar; i++) {
        certificadosInativos[i].classList.add('ativo');
    }

    const restantes = document.querySelectorAll('.certificado:not(.ativo)').length;

    esconderBotaoCertificado(restantes);
});

function esconderBotaoCertificado(restantes) {
    if (!btnMostrarCertificados) return;

    if (restantes === 0) {
        btnMostrarCertificados.classList.add('remover');
    }
}

function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];

    if (translation) {
      el.innerText = translation;
    }
  });

  // muda lang do HTML
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
}

btnLang.addEventListener("click", () => {
  const newLang = currentLang === "pt" ? "en" : "pt";
  setLanguage(newLang);
});