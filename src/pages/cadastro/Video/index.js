import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroVideo(){
    return(
        <PageDefault>
            <div>
                <h1>Cadastro de videos</h1>
            </div>

            <Link to="/cadastro/Categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;