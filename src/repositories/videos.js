const URL = 'http://localhost:8080/videos';

function createVideos(objVideo) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objVideo),
  })
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();

        return resposta;
      }

      throw new Error('Conexão com serivdor falhou, não cadastrou dados');
    });
}

export default {
  createVideos,
};
