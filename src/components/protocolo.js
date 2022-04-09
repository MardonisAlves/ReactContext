import React from "react";

const Protocolo = (props) => {
    const subString = props.value.substring(0, 18);
    if (subString) {
        console.log(props.value.length)
        // props.setShowbutton(true)
        return <p > Por favor informar outra justificativa < /p>
    } else {
        props.setShowbutton(false)
        return <p > Mostrar o component < /p>
    }
}


export default Protocolo;