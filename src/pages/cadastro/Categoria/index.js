import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  
  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor
    })
  }


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={(infosDoEvento) => {
        infosDoEvento.preventDefault();
        console.log("aqui");
        setCategorias([
          ...categorias,
          values.nome
        ])

      }}>
        
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              onChange={function(info) {
                setValue('nome', info.target.value)
              }}
            />
          </label>
        </div>  
        <div>
          <label>
            Descrição: 
            <textarea
              type="text"
              value={values.descricao}
              onChange={(info) => {
                setValue('descricao', info.target.value)
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              onChange={(info) => {
                setValue('cor', info.target.value)
              }}
            />
          </label>
        </div>

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