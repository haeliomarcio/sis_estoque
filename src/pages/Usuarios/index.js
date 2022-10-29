import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Usuarios() {
    const [list, setList] = useState([
        { id: '1', nome: 'Márcio', email: 'marcio@gmail.com', senha: '123' },
        { id: '2', nome: 'Maria', email: 'maria@gmail.com', senha: '123' },
    ]);

    // ESTUDAR MÉTODO MAP E FILTER DO JS
    return (
        <>
            <Button variant="success" size="sm">
                <Link to="/usuarios/novo">
                    Novo Usuário
                </Link>
            </Button>
            <Table hover striped>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, indice) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome }</td>
                            <td>{item.email}</td>
                            <td>
                                <Button size="sm" variant="primary">Editar</Button>
                                &nbsp;
                                <Button size="sm" variant="danger">Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
                   
        </>
    );
}

export default Usuarios;