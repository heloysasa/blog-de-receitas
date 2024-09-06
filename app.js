function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === "") {
        showAlert("Digite algo para pesquisar");
        return;
    }

    

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let modoPreparo = "";
    let tags = "";

    // Itera sobre cada dado (receita) no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (
            titulo.includes(campoPesquisa) ||
            descricao.includes(campoPesquisa) ||
            modoPreparo.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)
        ) {
            // Constrói o HTML para cada resultado, inserindo os dados da receita
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="modo-preparo">${dado.modoPreparo}</p>
                <a href="${dado.link}" target="_blank">Clique aqui para ver mais informações</a>
            </div>`;
        }
    }

    // Verifica se encontrou alguma receita
    if (!resultados) {
        showAlert("Desculpe, não temos essa receita disponível ainda");
    } else {
        // Atribui o HTML gerado para a seção de resultados
        section.innerHTML = resultados;
    }

}




function showAlert(message) {
    const alertBox = document.getElementById("alert-box");
    const alertMessage = alertBox.querySelector(".alert-message");
    alertMessage.textContent = message;
    alertBox.classList.remove("hidden");
}

function closeAlert() {
    const alertBox = document.getElementById("alert-box");
    alertBox.classList.add("hidden");
}



  function salgados() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultadosBotao = "";
  
    // Itera sobre cada dado (receita) no array de dados
    for (let dado of dadosSalgados) {
      // Constrói o HTML para cada resultado, inserindo os dados da receita
      resultadosBotao += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <p class="modo-preparo">${dado.modoPreparo}</p> <a href="${dado.link}" target="_blank">Clique aqui para ver mais informações</a> </div>
      `;
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultadosBotao;
  }


  function doces() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultadosBotao = "";
  
    // Itera sobre cada dado (receita) no array de dados
    for (let dado of dadosDoces) {
      // Constrói o HTML para cada resultado, inserindo os dados da receita
      resultadosBotao += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <p class="modo-preparo">${dado.modoPreparo}</p> <a href="${dado.link}" target="_blank">Clique aqui para ver mais informações</a> </div>
      `;
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultadosBotao;
  }


  function bebidas() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultadosBotao = "";
  
    // Itera sobre cada dado (receita) no array de dados
    for (let dado of dadosBebidas) {
      // Constrói o HTML para cada resultado, inserindo os dados da receita
      resultadosBotao += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <p class="modo-preparo">${dado.modoPreparo}</p> <a href="${dado.link}" target="_blank">Clique aqui para ver mais informações</a> </div>
      `;
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultadosBotao;
  }


  function bebidas() {
    const opcoesBebidas = document.getElementById('opcoesBebidas');
    opcoesBebidas.classList.toggle('hidden');

    let section = document.getElementById("resultados-pesquisa");
  
        // Inicializa uma string vazia para armazenar os resultados da pesquisa
        let resultadosBotao = "";
      
        // Itera sobre cada dado (receita) no array de dados
        for (let dado of dadosBebidas) {
          // Constrói o HTML para cada resultado, inserindo os dados da receita
          resultadosBotao += `
            <div class="item-resultado">
              <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <p class="modo-preparo">${dado.modoPreparo}</p> <a href="${dado.link}" target="_blank">Clique aqui para ver mais informações</a> </div>
          `;
        }
      
        // Atribui o HTML gerado para a seção de resultados
        section.innerHTML = resultadosBotao;
  }
  
 /* function todasAsBebidas() {

        // Seleciona a seção onde os resultados serão exibidos pelo ID
        let section = document.getElementById("resultados-pesquisa");
  
        // Inicializa uma string vazia para armazenar os resultados da pesquisa
        let resultadosBotao = "";
      
        // Itera sobre cada dado (receita) no array de dados
        for (let dado of dadosBebidas) {
          // Constrói o HTML para cada resultado, inserindo os dados da receita
          resultadosBotao += `
            <div class="item-resultado">
              <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <p class="modo-preparo">${dado.modoPreparo}</p> <a href="${dado.link}" target="_blank">Clique aqui para ver mais informações</a> </div>
          `;
        }
      
        // Atribui o HTML gerado para a seção de resultados
        section.innerHTML = resultadosBotao;
    
  }*/
  
  function bebidasSemAlcool() {
            // Seleciona a seção onde os resultados serão exibidos pelo ID
            let section = document.getElementById("resultados-pesquisa");
  
            // Inicializa uma string vazia para armazenar os resultados da pesquisa
            let resultadosBotao = "";
          
            // Itera sobre cada dado (receita) no array de dados
            for (let dado of dadosBebidasSemAlcool) {
              // Constrói o HTML para cada resultado, inserindo os dados da receita
              resultadosBotao += `
                <div class="item-resultado">
                  <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <p class="modo-preparo">${dado.modoPreparo}</p> <a href="${dado.link}" target="_blank">Clique aqui para ver mais informações</a> </div>
              `;
            }
          
            // Atribui o HTML gerado para a seção de resultados
            section.innerHTML = resultadosBotao;
    
  }
  
  function bebidasComAlcool() {
            // Seleciona a seção onde os resultados serão exibidos pelo ID
            let section = document.getElementById("resultados-pesquisa");
  
            // Inicializa uma string vazia para armazenar os resultados da pesquisa
            let resultadosBotao = "";
          
            // Itera sobre cada dado (receita) no array de dados
            for (let dado of dadosBebidasComAlcool) {
              // Constrói o HTML para cada resultado, inserindo os dados da receita
              resultadosBotao += `
                <div class="item-resultado">
                  <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <p class="modo-preparo">${dado.modoPreparo}</p> <a href="${dado.link}" target="_blank">Clique aqui para ver mais informações</a> </div>
              `;
            }
          
            // Atribui o HTML gerado para a seção de resultados
            section.innerHTML = resultadosBotao;
    
  }