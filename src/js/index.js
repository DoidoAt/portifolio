const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
esconderBotao(document.querySelectorAll('.projeto:not(.ativo)').length);

btnMostrarProjetos.addEventListener('click', () => {
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
    const projetosAtivos = document.querySelectorAll('.projeto.ativo');
    const qtdInativo = projetosInativos.length;
    var totalAtivo = projetosAtivos.length;

    var esconder = mostrarMaisProjetos(qtdInativo, totalAtivo, projetosInativos);

    esconderBotao(esconder);
})

function esconderBotao(esconder) {
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
