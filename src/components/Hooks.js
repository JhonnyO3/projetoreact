import {useState} from "react";
const Hooks = () => {

    let idade = 30
    const [novaIdade, setNovaIdade] = useState(40);

    const mudaIdade = () => {
        idade = 31;
        console.log(idade);
};

    const ChangeAge = () => { 
        setNovaIdade(45);

    };

    return (
        <div>
            <p>idade: {idade}</p>
            <button onClick={mudaIdade}>mudar idade </button>
            <p>idade: {novaIdade}</p>
            <button onClick={ChangeAge}>mudar nova idade </button>
        </div>
    )

}


export default Hooks