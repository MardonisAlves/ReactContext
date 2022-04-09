import { Button } from "@material-ui/core";
import ButtonCollor from "./context/ButtonCollor";
import { useContext } from "react";
const ButtonCustom = (props) => {
    const text = useContext(ButtonCollor)
    return (
        <>
            <Button variant="contained" color={text} disabled={props.disabled}>
                Text
            </Button>
        </>
    )
}

export default ButtonCustom;