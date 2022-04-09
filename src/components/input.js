import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Protocolo from './protocolo';
import ButtonCustom from './button';

const Input = (props) => {
    const [value, setValue] = useState('');
    const [text, setText] = useState('PROTOCOLO MED FLOW');
    const [showbutton, setShowbutton] = useState(false)

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles();

    const changeValue = (event) => {
        let value = event.target.value;
        const valueUpcase = value.toUpperCase()
        setValue(valueUpcase)
    }
    return (
        <>
            <p>{value}</p>
            <Protocolo value={value} text={text} setShowbutton={setShowbutton}/>
            <input
                type={props.text}
                name={props.name}
                value={value}
                onChange={changeValue}
                
            />
           <ButtonCustom variantbutton="contained" cor="primary" disabled={false} title="Solicitar" />

        </>
    )
}

export default Input;