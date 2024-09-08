// Função para mudar o tipo de pesquisa
function mudarTipo(tipo) {
    // Atualiza a variável global para o tipo de pesquisa
    window.tipoPesquisa = tipo;
    // Limpa os resultados anteriores
    document.getElementById("resultados").innerHTML = "";

    // Define o gradiente de fundo com base no tipo de pesquisa
    let gradienteFundo;
    switch (tipo) {
        case 'planetas':
            gradienteFundo = 'linear-gradient(135deg, #00c3ff, #8a2be2, #ff00cc, #c0c0c0, #ffd700)'; // Gradiente para planetas
            break;
        case 'satelites':
            gradienteFundo = 'linear-gradient(135deg, #90FCF9, #63B4D1, #7699D4, #9448BC, #480355)'; // Gradiente para satélites
            break;
        case 'estrelas':
            gradienteFundo = 'linear-gradient(135deg, #ff4081, #fbc02d)'; // Gradiente para estrelas
            break;
        default:
            gradienteFundo = 'linear-gradient(135deg, #00c3ff, #8a2be2, #ff00cc, #c0c0c0, #ffd700)'; // Gradiente padrão
    }
    // Aplica o gradiente de fundo ao body
    document.body.style.background = gradienteFundo;
}

// Função para realizar a pesquisa
function fazerPesquisa() {
    let section = document.getElementById("resultados");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo para pesquisar</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";

    let dados;
    if (window.tipoPesquisa === 'planetas') {
        dados = infosPlanetas;
    } else if (window.tipoPesquisa === 'satelites') {
        dados = infosSatelites;
    } else if (window.tipoPesquisa === 'estrelas') {
        dados = infosEstrelas;
    }

    if (window.tipoPesquisa === 'planetas') {
        for (let dado of dados) {
            let planeta = dado.planeta ? dado.planeta.toLowerCase() : "";
            let descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
            let luas = dado.luas ? dado.luas.toLowerCase() : "";  
            let composicao = dado.composicao ? dado.composicao.toLowerCase() : "";
            let tags = dado.tags ? dado.tags.toLowerCase() : "";

            if (
                planeta.includes(campoPesquisa) ||
                descricao.includes(campoPesquisa) ||
                luas.includes(campoPesquisa) ||  
                composicao.includes(campoPesquisa) ||
                tags.includes(campoPesquisa)
            ) {
                resultados += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.planeta}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="lua-meta"><strong>Luas:</strong> ${dado.luas}</p>
                    <p class="composicao-meta"><strong>Composição:</strong> ${dado.composicao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
                `;
            }
        }
    } else if (window.tipoPesquisa === 'satelites') {
        for (let dado of dados) {
            let satelite = dado.satelite ? dado.satelite.toLowerCase() : "";
            let descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
            let planeta = dado.planeta ? dado.planeta.toLowerCase() : "";  
            let tags = dado.tags ? dado.tags.toLowerCase() : "";

            if (
                satelite.includes(campoPesquisa) ||
                descricao.includes(campoPesquisa) ||
                planeta.includes(campoPesquisa) ||  
                tags.includes(campoPesquisa)
            ) {
                resultados += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.satelite}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="planeta-meta"><strong>Planeta:</strong> ${dado.planeta}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
                `;
            }
        }
    } else if (window.tipoPesquisa === 'estrelas') {
        for (let dado of dados) {
            let estrela = dado.estrela ? dado.estrela.toLowerCase() : "";
            let descricao = dado.descricao ? dado.descricao.toLowerCase() : "";
            let constelacao = dado.constelacao ? dado.constelacao.toLowerCase() : "";
            let tags = dado.tags ? dado.tags.toLowerCase() : "";

            if (
                estrela.includes(campoPesquisa) ||
                descricao.includes(campoPesquisa) ||
                constelacao.includes(campoPesquisa) ||
                tags.includes(campoPesquisa)
            ) {
                resultados += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.estrela}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="constelacao-meta"><strong>Constelação:</strong> ${dado.constelacao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
                `;
            }
        }
    }

    if (!resultados) {
        resultados = "<p>Não foram encontrados resultados para sua pesquisa</p>";
    }

    section.innerHTML = resultados;
}
