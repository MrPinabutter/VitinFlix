import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
        <PageDefault>
            <div>
                <h1>Cadastro de videos</h1>
            </div>

            <Link to="/">
                Voltar para Home
            </Link>

        </PageDefault>
    )
}

export default CadastroCategoria