import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FormUsuarios(){

    const [dados, setDados] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    function atualizarState(e) {
        const name = e.target.name;
        const value = e.target.value;

        if(name == 'nome') {
            setDados({...dados, nome: value });
        }
        if(name == 'email') {
            setDados({...dados, email: value });
        }

        if(name == 'senha') {
            setDados({...dados, senha: value });
        }
        console.log(dados);
    }

    function salvarDados(e){
        e.preventDefault();
        alert("Salvando");
    }

    return (
        <>
            <Container>
                <Row>
                    <Col md={8}>
                        <Button variant="warning" size="sm">
                            <Link to="/usuarios">
                                Voltar
                            </Link>
                        </Button>
                        <h3>Formulário de Usuário</h3>
                        <form onSubmit={salvarDados}>
                            <div className='mt-3'>
                                <label className='form-label'>Nome</label>
                                <input 
                                    type="text" 
                                    name="nome" 
                                    id="nome" 
                                    className='form-control' 
                                    onChange={atualizarState}
                                    value={dados.nome}
                                />
                            </div>
                            <div className='mt-3'>
                                <label className='form-label'>E-mail</label>
                                <input 
                                    type="email" 
                                    name="email" id="email" 
                                    className='form-control' 
                                    onChange={atualizarState}
                                    value={dados.email}
                                />
                            </div>
                            <div className='mt-3'>
                                <label className='form-label'>Senha</label>
                                <input 
                                    type="password" 
                                    name="senha" id="senha" 
                                    className='form-control' 
                                    onChange={atualizarState}
                                    value={dados.senha}
                                />
                            </div>
                            <div className='mt-3'>
                                {/* ISSO É UM COMENTÁRIO */}
                                <input type="submit" value="Salvar" className='btn btn-success' />
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            
            
        </>
    );
}

export default FormUsuarios;