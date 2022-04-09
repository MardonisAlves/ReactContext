import { Button } from "@material-ui/core";
import ButtonCollor from "./context/ButtonCollor";
import { useContext } from "react";

const ButtonCustom = () => {
    console.log(ButtonCollor)
    return (

        <ButtonCollor.Consumer>
        {({color, variant}) => {
           return  <Button variant={variant} color={color} >
              {color}
            </Button>
        }}
        </ButtonCollor.Consumer>

    )
}

export default ButtonCustom;