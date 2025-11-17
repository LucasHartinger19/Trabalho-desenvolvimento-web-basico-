function loginAdmin() {
  window.location.href = "admin.html";
}

function loginUsuario() {
  window.location.href = "usuario.html";
}

function validarLoginAdmin() {
  // Pega os valores dos inputs
  const usuario = document.getElementById("usuarioAdmin").value;
  const senha = document.getElementById("senhaAdmin").value;
  const mensagemErro = document.getElementById("mensagemErro");

  // Usuário e senha corretos (pode depois puxar do LocalStorage se quiser)
  const usuarioCorreto = "admin";
  const senhaCorreta = "123";

  // Verifica se os campos estão preenchidos
  if (usuario === "" || senha === "") {
    mensagemErro.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    mensagemErro.textContent = "";
    alert("Login realizado com sucesso!");
    window.location.href = "adminPagina.html";
  } else {
    mensagemErro.textContent = "Usuário ou senha incorretos!";
  }
}

function validarLoginUsuario() {
  // Pega os valores dos inputs
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senhaUsuario").value;
  const mensagemErro = document.getElementById("mensagemErro");

  // Usuário e senha corretos
  const usuarioCorreto = "usuario";
  const senhaCorreta = "123";

  // Verifica se os campos estão preenchidos
  if (usuario === "" || senha === "") {
    mensagemErro.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    mensagemErro.textContent = "";
    alert("Login realizado com sucesso!");
    window.location.href = "adminPagina.html";
  } else {
    mensagemErro.textContent = "Usuário ou senha incorretos!";
  }
}


// Função para salvar dados no localStorage
function salvarNoLocalStorage(chave, dados) {
    let lista = JSON.parse(localStorage.getItem(chave)) || [];
    lista.push(dados);
    localStorage.setItem(chave, JSON.stringify(lista));
}

// MÚSICAS
document.getElementById("formAdicionarMusica").addEventListener("submit", function(event) {
    event.preventDefault();

    const musica = {
        nome: document.getElementById("nomeMusica").value,
        duracao: document.getElementById("duracaoMusica").value,
        genero: document.getElementById("generoMusica").value
    };

    salvarNoLocalStorage("musicas", musica);
    alert("Música adicionada com sucesso!");
    window.location.href = "listagem.html";
});

// ARTISTAS
document.getElementById("formAdicionarArtista").addEventListener("submit", function(event) {
    event.preventDefault();

    const artista = {
        nome: document.getElementById("nomeArtista").value,
        genero: document.getElementById("generoArtista").value
    };

    salvarNoLocalStorage("artistas", artista);
    alert("Artista adicionado com sucesso!");
    window.location.href = "listagem.html";
});

// ÁLBUNS
document.getElementById("formAdicionarAlbum").addEventListener("submit", function(event) {
    event.preventDefault();

    const album = {
        nome: document.getElementById("nomeAlbum").value,
        artista: document.getElementById("artistaAlbum").value,
        ano: document.getElementById("anoAlbum").value
    };

    salvarNoLocalStorage("albuns", album);
    alert("Álbum adicionado com sucesso!");
    window.location.href = "listagem.html";
});

