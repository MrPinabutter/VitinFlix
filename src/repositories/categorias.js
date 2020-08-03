const URL = 'http://localhost:8080/categorias?_embed=videos';

function getAll() {
  return fetch('http://localhost:8080/categorias')
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();

        return resposta;
      }

      throw new Error('Conexão com serivdor falhou');
    });
}

function getAllWithVideos() {
  return fetch(URL)
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();

        return resposta;
      }

      throw new Error('Conexão com serivdor falhou');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
