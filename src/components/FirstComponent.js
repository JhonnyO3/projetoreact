
function FirstComponent() {
    const handleClick = () => {
        console.log("Você clicou no botão!")
    }
    return(
        <div>
            <p>Primeiro Componente</p>
            <button onClick={handleClick}>Clique Aqui!</button>
            <hr></hr>
            <button onClick={() => console.log('Hello World')}>Clique Novamente aqui!</button> 
        </div>
    )

}

export default FirstComponent