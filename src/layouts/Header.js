import React, { useEffect } from 'react';

function Header() {
    const [contador, setContador] = React.useState(0);
    const [pesquisa, setPesquisa] = React.useState('');
    function aumentar(){
        const valor = contador + 1;
        setContador(valor);
    }
    function diminuir(){
        const valor = contador - 1;
        setContador(valor);
    }
    function alterarPesquisa(e){
        setPesquisa(e.target.value);
    }
    React.useEffect(() => {
        console.log("Use Effect");
    }, []);

    React.useEffect(() => {
        console.log("Use Effect 2 - Faz a pesquisa no Json-server: " + pesquisa);
    }, [contador, pesquisa]);

    return (
        <>
            <h1>Header</h1>
            <h2>Contador: {contador}</h2>
            <input type="text" value={pesquisa} onChange={alterarPesquisa} />
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </>
    );
}

export default Header;