import  {Button} from "@material-ui/core";

const ButtonCustom =(props) => {

    return(
        <>
        <Button variant="contained" color="primary" disabled={props.disabled}>
            {props.title}
            </Button>  
        </>    
    )
}

export default ButtonCustom;