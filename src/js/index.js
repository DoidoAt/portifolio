const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
esconderBotaoProjetos(document.querySelectorAll('.projeto:not(.ativo)').length);

btnMostrarProjetos.addEventListener('click', () => {
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
    const projetosAtivos = document.querySelectorAll('.projeto.ativo');
    const qtdInativo = projetosInativos.length;
    var totalAtivo = projetosAtivos.length;

    var esconder = mostrarMaisProjetos(qtdInativo, totalAtivo, projetosInativos);

    esconderBotaoProjetos(esconder);
})

function esconderBotaoProjetos(esconder) {
    if (esconder == 0)
        btnMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos(qtdInativo, totalAtivo, projetosInativos) {
    if (qtdInativo != 0) {
        var i;
        for ( i = 0; i < 4 && (totalAtivo+i) < totalAtivo + qtdInativo; i++ && totalAtivo++) {
            projetosInativos[i].classList.add("ativo");
        }
    }
    return qtdInativo - i;
}

const btnMostrarCertificados = document.querySelector('.btn-mostrar-certificados');
esconderBotaoCertificado(document.querySelectorAll('.certificado:not(.ativo)').length);

btnMostrarCertificados.addEventListener('click', () => {
    const certificadosInativos = document.querySelectorAll('.certificado:not(.ativo)');
    const certificadosAtivos = document.querySelectorAll('.certificado.ativo');
    const qtdInativo = certificadosInativos.length;
    var totalAtivo = certificadosAtivos.length;
    console.log(qtdInativo, totalAtivo);

    var esconder = mostrarMaiscertificados(qtdInativo, totalAtivo, certificadosInativos);

    esconderBotaoCertificado(esconder);
})

function esconderBotaoCertificado(esconder) {
    if (esconder == 0)
        btnMostrarCertificados.classList.add('remover');
}

function mostrarMaiscertificados(qtdInativo, totalAtivo, certificadosInativos) {
    if (qtdInativo != 0) {
        var i;
        for ( i = 0; i < 4 && (totalAtivo+i) < totalAtivo + qtdInativo; i++ && totalAtivo++) {
            certificadosInativos[i].classList.add("ativo");
        }
    }
    return qtdInativo - i;
}
