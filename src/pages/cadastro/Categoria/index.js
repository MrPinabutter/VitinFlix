import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  
  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleChange(infos){
    setValue(
      infos.target.getAttribute('name'),
      infos.target.value
    );
  }


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        
        setCategorias([
          ...categorias,
          values.nome
        ])

        setValues(valoresIniciais)
      }}>
        
        <FormField
        label='Nome da categoria'
        type='nome'
        value={values.nome}
        name='nome'
        onChange={handleChange}
         />
         

        <FormField
        label='Descrição'
        type='textarea'
        value={values.descricao}
        name='descricao'
        onChange={handleChange}
         />
        
        <FormField
        label='Cor'
        type='color'
        value={values.cor}
        name='cor'
        onChange={handleChange}
         />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key = {`${categoria}${index}`}>
              {categoria}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;