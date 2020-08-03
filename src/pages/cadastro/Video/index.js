import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  return (
    <PageDefault>
      <div>
        <h1>Cadastro de videos</h1>
      </div>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.createVideos({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
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
