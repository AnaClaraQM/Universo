function fazerPesquisa() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados");

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // se o campo de pesquisa estiver vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um satélite</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de satélites (usando a variável 'infos')
    for (let dado of infos) {
        let satelite = dado.satelite ? dado.satelite.toLowerCase() : "";
        let descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
        let tags = dado.tags ? dado.tags.toLowerCase() : "";

        // Verifica se algum dos campos contém o termo pesquisado
        if (
            satelite.includes(campoPesquisa) ||
            descricao.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)
        ) {
            // Cria um novo elemento de resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.satelite}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Se nenhum resultado for encontrado
    if (!resultados) {
        resultados = "<p>Não foram encontrados resultados para sua pesquisa</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
