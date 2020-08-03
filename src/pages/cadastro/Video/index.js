import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoryRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoryRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <div>
        <h1>Cadastro de videos</h1>
      </div>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => (
          categoria.titulo === values.categoria));

        videosRepository.createVideos({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          history.push('/');
        });
      }}
      >
        <FormField
          label="Título do Vídeo"
          type="titulo"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo"
          type="url"
          value={values.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Categoria do Vídeo"
          type="categoria"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button as="button" type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/Categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
