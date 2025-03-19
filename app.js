
// Armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
const adicionarAmigo = () => {
    const inputAmigos = document.getElementById('amigo');
    const nomeAmigo = inputAmigos.value.trim();

    if (!nomeAmigo) {
        alert("Por favor, insira um nome!");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert(`${nomeAmigo} já está na lista!`);
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigos.value = "";
    atualizarLista();
};

// Função para atualizar a lista de amigos na interface
const atualizarLista = () => {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
};

// Função para selecionar amigo aleatório
const sortearAmigo = () => {
    if (amigos.length === 0) {
        alert('Não há amigos disponíveis para sortear. Adicione pelo menos um!');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
};